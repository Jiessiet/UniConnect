/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail,   // custom validator
			message: 'Not valid email'
		}
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	username: {
		type: String,
		minlength: 5,
		unique: true,
		required: true
	},
	userType: {
		type: Boolean,
		default: false
	},
	name: {
		type: String,
	},
	profilePhoto: {
		type: String,
	},
	description: {
		type: String,
		default: ''
	},
	tags: [{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
	}],
	friends: [{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
	}],
	attendingEvents: [{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
	}],
	university: {
		type: String,
		required: true
	},
	actionLog:[{
		type: String
	}]
})

UserSchema.pre('save', function(next) {
	const user = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

UserSchema.statics.findByEmailPassword = function(email, password) {
	const User = this // binds this to the User model

	// First find the user by their email
	return User.findOne({ email: email }).then((user) => {
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

const User = mongoose.model('User', UserSchema)
module.exports = { User }