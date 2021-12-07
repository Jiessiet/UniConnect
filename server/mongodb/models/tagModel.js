/* Tag model */
'use strict';

const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
        trim: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
    }
})

const Tag = mongoose.model('Tag', TagSchema)
module.exports = { Tag }