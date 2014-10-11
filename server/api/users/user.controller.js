'use strict';

var User = require('./model');

exports.index = function(req, res) {
	User.find(function(err, users) {
		if(err) { return handleError(res, err); }
		return res.json(users);
	});
};