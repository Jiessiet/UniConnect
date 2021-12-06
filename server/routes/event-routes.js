const express = require('express');
const { Event } = require('../mongodb/models/eventModel');
const authenticate = require('../middleware/authmiddleware');
const { mongoose } = require('../mongodb/config');
const { Tag } = require('../mongodb/models/tagModel');

const router = express.Router();

// get all events
router.get('/api/events', async (req, res) => {
  try {
    const event = await Event.find();

    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// create an event
router.post('/api/events', authenticate, async (req, res) => {
  const newEvent = new Event({
    ...req.body,
    creator: req.user,
    createAt: new Date().toISOString()
  });

  try {
    await newEvent.save();

    res.status(201).json(newEvent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

// update event
router.patch('/api/events/:id', authenticate, async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No event with that id');
  
  const updatedEvent = await Event.findByIdAndUpdate(_id, { ...req.body});

  res.json(updatedEvent);
});

// delete event
router.delete('/api/events/:id', authenticate, async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No event with that id');

    await Event.findByIdAndDelete(id);

    res.json({ message: 'Event deleted successfully' })
});

// get events by user
router.get('/api/events/user', authenticate, async (req, res) => {
    try {
        const eventByUser = await Event.find({ creator : req.user });
        res.status(200).json(eventByUser);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// post tag to event
router.post('/api/events/addTagToEvent', authenticate, (req, res) => {
	const event_id = req.body.id
	const tag_name = req.body.tag_id

	Event.findOne({_id:event_id}).then((chosenEvent) => {
    
    Tag.findOne({name: tag_name}).then((chosenTag) => {
      const tag_id = chosenTag
      chosenEvent.tags.push(tag_id)
		  chosenEvent.save().then((rest) => {
			res.send({tag: rest.tag, event: rest})
		}).catch((error) => {
      console.log(error)
			res.status(500).send(error)
		})    
	}).catch((error) => {
    console.log(error)
		res.status(500).send(error)
  })
})
})


module.exports = router;
