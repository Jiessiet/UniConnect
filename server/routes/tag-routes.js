const express = require("express");
const { Tag } = require("../mongodb/models/tagModel");
const { Event } = require("../mongodb/models/eventModel");
const mongoChecker = require("../middleware/mongoChecker")
const authenticate = require('../middleware/authmiddleware');
const { Category } = require("../mongodb/models/categoryModel");

const router = express.Router();

// post tag and save
router.post("/api/tag", authenticate, (req, res) => {

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

//get all tags
router.get('/api/tag', authenticate, (req, res) => {

	Tag.find().then((tag) => {
		res.send(tag)
	}).catch((error) => {
		res.status(500).send(error)
	})
})

//get tags by id
router.get('/api/tag/:id', authenticate, (req, res) => {
	
	Tag.findOne({_id:req.params.id}).then((tag) => {
		res.send(tag)
	}).catch((error) => {
		res.status(500).send(error)
	})
})

// put updated tag
router.put('/api/tag/:id', authenticate, (req, res) => {
	const id = req.params.id

	if (req.user.userType){
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
}
})

// delete tag only done by admins
router.delete('/api/tag', authenticate, (req, res) => {

	if (req.user.userType){
		Tag.findOneAndDelete({name: req.query.name}).then(() => {
			}).catch((error) => {
				res.status(500).send(error)
			})

} else {
	res.status(401).send('Unautorized')
}

})

router.post('/api/category', authenticate, async (req, res) => {
	try {
		const category = new Category({
			name: req.body.name,
		})

		const result = await category.save()
		res.status(200).send(result)
	} 
	catch(e){
		res.status(400).send("Bad Request")
	}
})

//get all tags from one category
router.get('/api/tag/category/:category', authenticate, (req, res) => {
	
	Tag.find({category:req.params.category}).then((tags) => {
		res.send(tags)
	}).catch((error) => {
		res.status(500).send(error)
	})
})

// get all categories
router.get('/api/categories', authenticate, (req, res) => {
	
	Category.find().then((cat) => {
		res.send(cat)
	}).catch((error) => {
		res.status(500).send(error)
	})
})



module.exports = router;