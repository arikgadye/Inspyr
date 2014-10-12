'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  location: String,
  image: String,
	books: []
});

UserSchema.pre('save', function(next){
	if (!this.image) {
		this.image = 'http://wiki.tripwireinteractive.com/images/4/47/Placeholder.png'
	};
	next();
});

module.exports = mongoose.model('User', UserSchema);