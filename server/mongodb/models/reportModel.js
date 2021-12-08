/* Evnet model */
'use strict';

const mongoose = require('mongoose')

const ReportSchema = new mongoose.Schema({
   
    reporter: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    reported: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    description: {
        type: String,
        required: false,
        maxlength: 500,
    },
    resolved: {
        type: Boolean,
        default: false
    }
})

const Report = mongoose.model('Report', ReportSchema)
module.exports = { Report }