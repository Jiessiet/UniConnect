const express = require("express");
const { User } = require("../mongodb/models/userModel");
const mongoChecker = require("../middleware/mongoChecker");
const authenticate = require("../middleware/authmiddleware");


const router = express.Router();

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

router.post("/api/users/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // log(email, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findByEmailPassword(email, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.email = user.email; // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
            res.send({ currentUser: user.email });
        })
        .catch(error => {
            res.status(400).send()
        });
});

// A route to logout a user
router.get("/api/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// sign up function
router.post('/api/users', mongoChecker, async (req, res) => {
    console.log(req.body)

    // Create a new user
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        ...req.body
    })

    try {
        // Save the user
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            console.log(error)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

router.get("/users/check-session", (req, res) => {
    // if (process.env.NODE_ENV !== 'production' && USE_TEST_USER) { // test user on development environment.
    //     req.session.user = TEST_USER_ID;
    //     req.session.email = TEST_USER_EMAIL;
    //     res.send({ currentUser: TEST_USER_EMAIL })
    //     return;
    // }

    if (req.session.user) {
        res.send({ currentUser: req.session.email });
    } else {
        res.status(401).send();
    }
});

// get all users
router.get("/api/users", authenticate, (req, res) => {
    if (req.user.userType) {
        User.find().then((users) => {
            res.send(users)
        }).catch((error) => {
            res.status(404).send("Bad Request: Users cannot be found")
        })
    } 
    else {
        res.status(401).send("Unauthorized")
    }
})

// get one user
router.get("/api/users/:id", authenticate, (req, res) => {
    User.findOne({_id: req.params.id}).then((user) => {
        res.send(user)
    }).catch((error) => {
        res.status(404).send("Bad Request: User does not exist")
    })
})

// get by username
router.get("/api/users/username/:username", authenticate, (req, res) => {
    User.findOne({username: req.params.username}).then((user) => {
        res.send(user)
    }).catch((error) => {
        console.log(error)
        res.status(404).send("Bad Request: User does not exist")
    })
})

//add friend
// router.patch("/api/users/:id", authenticate, (req, res) => {
//     User.findOne({_id: req.params.id}).then((friend) => {
//         // const friend = User.findOne({_id: req.params.friendId})
//         req.user.friends.push(friend)
//         req.user.save().then((user) => {
//             res.send(user.friends)
//         }).catch((error) => {
// 			res.status(500).send('save failed')
// 		})
//     }).catch((error) => {
//         res.status(500).send('cant find')
//     })
// })

// get user's friends
// router.get("/api/users/:id", (req, res) => {
//     User.findOne({_id: req.params.id}).then((user) => {
//         res.send(user.friends)
//     }).catch((error) => {
//         res.status(500).send(error)
//     })
// })


// put user

router.put('/api/users/:id', authenticate, (req, res) => {

    User.findByIdAndUpdate({_id: req.params.id}, { ...req.body}, {new: true}).then((updatedUser) => {
        res.send(updatedUser)
    }).catch((error) => {
        res.status(404).send("User does not exist and/or cannot be updated")
    })
})

// delete user
router.delete('/api/users/:id', authenticate, (req, res) => {
    
    User.findOne({_id: req.params.id}).then((deletedUser) => {
    if (req.user.userType || (req.user._id == req.params.id)) {
        User.deleteOne({_id: req.params.id}).then(() => {
            res.send(deletedUser)
        }).catch((error) => {
            res.status(500).send("User cannot be deleted")
        })
    }else {
        res.status(401).send('Unauthorized Request')
    }
    }).catch((error) => { 
        res.status(404).send("Bad Request: User does not exist")
    })
   
})


module.exports = router;