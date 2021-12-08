const express = require("express");
const { User } = require("../mongodb/models/userModel");
const {Event} = require("../mongodb/models/eventModel")
const { Report } = require("../mongodb/models/reportModel")
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

router.get("/api/admin/reports", authenticate, async (req, res) => {
    try {
        if (req.user.userType) {
            const reports = await Report.find({resolved: false})
            res.status(200).send(reports)
        }
        else{
            res.status(401).send("Unauthorized")
        }       
    } catch (e) {
        console.log(e)
        res.status(500).send("Internal Error")
    }
})

router.post("/api/admin/resolve-report", authenticate, async (req, res) => {
    try {
        if (req.user.userType) {
            const report = await Report.findById(req.body.id)
            if(!report) return res.status(404).send('no such report');
            report.resolved = true
            report.save()
            res.status(200).send("report resolved")
        }
        else{
            res.status(401).send("Unauthorized")
        }  
    } catch (e) {
        console.log(e)
        res.status(500).send("Internal Error")
    }
})

module.exports = router;