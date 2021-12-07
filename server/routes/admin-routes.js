const express = require("express");
const { User } = require("../mongodb/models/userModel");
const {Event} = require("../mongodb/models/eventModel")
const mongoChecker = require("../middleware/mongoChecker");
const authenticate = require("../middleware/authmiddleware");
const { Tag } = require("../mongodb/models/tagModel");

const router = express.Router();

router.get("/api/admin/stats", authenticate, async (req, res) => {
    if (req.user.userType) {
        const userNumber = await User.countDocuments()
        const eventNumber = await Event.countDocuments()
        const tagNumber = await Tag.countDocuments()

        res.status(200).send({userNumber, eventNumber, tagNumber})
    }
    else{
        res.status(401).send("Unauthorized")
    }
})


module.exports = router;