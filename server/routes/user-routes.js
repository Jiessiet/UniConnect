const express = require("express");
const { User } = require("../mongodb/models/userModel");
const {Event} = require("../mongodb/models/eventModel")
const mongoChecker = require("../middleware/mongoChecker");
const authenticate = require("../middleware/authmiddleware");
const { Tag } = require("../mongodb/models/tagModel");
const multer = require('multer');
const upload = multer({ dest: '../tmp/img/' });
const fs = require('fs');
const cloudinary = require('../cloudinary')


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
            req.session.user = user._doc;
             // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
            res.send({ ...user._doc });
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

router.get("/users/check-session", async (req, res) => {
    try {
        if (req.session.user) {
            req.session.user = (await User.findById(req.session.user))._doc
            res.send(req.session.user);
        } else {
            res.status(401).send();
        }
    } catch (e) {
        console.log(e)
        res.status(500).send('Internal Error')
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
router.get("/api/users/find/by/username", authenticate, (req, res) => {
    const username = req.query.username
    console.log(req.query)
    console.log('slpli')
    console.log(username)
    User.findOne({username: username}).then((user) => {
        res.send(user)
    }).catch((error) => {
        console.log(error)
        res.status(404).send("Bad Request: User does not exist")
    })
})

// add friend
router.patch("/api/users/addFriend/:id", authenticate, (req, res) => {
    User.findOne({_id: req.params.id}).then((friend) => {
        if(req.user._id != req.params.id) {
        req.user.friends.push(friend)
        req.user.save().then((user) => {
            res.send(user.friends)
        }).catch((error) => {
			res.status(500).send('Save failed')
		})
    } else {
        res.status(404).send('Bad Request: User cannot friend themselves')
    }
    }).catch((error) => {
        res.status(500).send('Cannot find User')
    })
})

// add event to user
router.patch("/api/users/addEvent/:id", authenticate, (req, res) => {
        Event.findOne({_id: req.params.id}).then((event) => {
            req.user.attendingEvents.push(event)
            req.user.save().then((user) => {
                res.send(req.user.attendingEvents)
            }).catch((error) => {
    			res.status(500).send('Save failed')
    		})
        }).catch((error) => {
            res.status(500).send('Cannot find event')
        })
    })


router.patch("/api/users/addTag", authenticate, async (req, res) => {
    try {
        req.user.tags.splice(0, req.user.tags.length)
        await req.user.save()    
        for (const property in req.body) {
            if(req.body[property]) {
                const tag = await Tag.findOne({name: property}).exec()
                req.user.tags.push(tag)
            }
        }
        await req.user.save()
        res.send(req.user.tags)
    } catch (e) {
        console.log(e)
        res.status(500).send('Save failed')
    }

    // Tag.findOne({name: req.body.name}).then((event) => {
    //     req.user.tags.push(event)
    //     req.user.save().then((user) => {
    //         res.send(req.user.tags)
    //     }).catch((error) => {
    //         res.status(500).send('Save failed')
    //     })
    // }).catch((error) => {
    //     res.status(500).send('Cannot Find Tag')
    // })
})

// get user's friends
// router.get("/api/users/:id", (req, res) => {
//     User.findOne({_id: req.params.id}).then((user) => {
//         res.send(user.friends)
//     }).catch((error) => {
//         res.status(500).send(error)
//     })
// })


// patch user
router.patch('/api/users/:id', authenticate, (req, res) => {
    User.findById({_id: req.params.id}).then((oldUserDetails) => {
        if (req.user.userType || (req.user._id == req.params.id)) {
            User.findByIdAndUpdate({_id: req.params.id}, { ...req.body}, {new: true}).then((updatedUser) => {
                res.send(updatedUser)
            }).catch((error) => {
                res.status(404).send("User cannot be updated")
            })
        }
        else {
            res.status(401).send('Unauthorized Request')
        }
    }).catch((error) => {
        res.status(404).send("User does not exist")
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

router.post('/api/user-photo/:userId', authenticate, upload.single('file'), async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).exec()
        if(!user) { 
            fs.unlinkSync(req.file.path)
            return res.status(404).send('no such user')
        }
        if(user._id.str !== req.user._id.str) {
            fs.unlinkSync(req.file.path)
            return res.status(401).send('not the creator') 
        }
        try {
            const image = await cloudinary.uploader.upload(req.file.path, { 
                public_id: req.params.userId,
                folder: 'profilePhotos',
                eager: [ { width: 400, height: 400, crop: "fill" } ]
            })
            fs.unlinkSync(req.file.path)
            await User.findByIdAndUpdate(req.params.userId, {profilePhoto: image.eager[0].secure_url})
            //console.log(image)
            res.status(200).send('image uploaded')
        } 
        catch(e){
            console.log(e)
            fs.unlinkSync(req.file.path)
            res.status(500).send("Cloudinary Error")
        }
    } 
    catch(e){
        console.log(e)
        fs.unlinkSync(req.file.path)
        res.status(400).send("Bad Input")
    }
})


module.exports = router;