/* Evnet model */
'use strict';

const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true,
        unique: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
        required: false,
        maxlength: 500,
    },
    attendeeLimit: {
        type: Number,
        required: false,
    },
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    location: {
        type: String,
        required: false,
        maxlength: 50,
    }
})

const Event = mongoose.model('Event', EventSchema)
module.exports = { Event }