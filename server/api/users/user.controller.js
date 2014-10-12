'use strict';

var User = require('./model');

exports.index = function(req, res) {
	User.find(function(err, users) {
		if(err) { return handleError(res, err); }
		return res.json(users);
	});
};

exports.user = function(req, res) {
	var id = req.params.id;
	User.findOne({ _id: id }, function(err, data){
		console.log(data)
		res.json(data);
	});
}