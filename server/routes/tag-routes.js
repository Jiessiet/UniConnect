const express = require("express");
const { Tag } = require("../mongodb/models/tagModel");
const mongoChecker = require("../middleware/mongoChecker")

const router = express.Router();

// post tag and save
router.post("/api/tag", (req, res) => {

	const tag = new Tag({
		name: req.body.name,
		category: req.body.category,
	})
	tag.save().then((rest) => {
		res.send(rest)
	}).catch((error) => {
		res.status(500).send(error)
	})
})

// //get all tags - only done by admin
router.get('/api/tag', (req, res) => {

	Tag.find().then((tag) => {
		res.send(tag)
	}).catch((error) => {
		res.status(500).send(error)
	})

})

//get tags by id
router.get('/api/tag/:id', (req, res) => {
	
	Tag.findOne({_id:req.params.id}).then((tag) => {
		res.send(tag)
	}).catch((error) => {
		res.status(500).send(error)
	})
})

// put updated tag
router.put('/api/tag/:id', (req, res) => {
	const id = req.params.id

	Tag.findOneAndReplace({_id: id}, req.body, {new: true, useFindAndModify: false})
	.then((tag) => {
		if (!tag) {
			res.status(404).send()
		} else {   
			res.send(tag)
		}
	})
	.catch((error) => {
		res.status(500).send(error)
	})
})


// // delete tag only done by admins
router.delete('/api/tag/:id', (req, res) => {

	Tag.findOne({_id:req.params.id}).then((rest) => {
		
		res.send(rest)
		rest.remove(req.params.id)
		rest.save().then((result) => {
			res.send({tag: deletedTag})
		}).catch((error) => {
			res.status(500).send(error)
		})
	}).catch((error) => {
			res.status(500).send(error)
	})

})

module.exports = router;