var mongoose = require('mongoose');

var model = mongoose.model('user', new mongoose.Schema({
	Name: {type:String}
	, Color: {type:String}
  , userName: {type:String, unique: true}
	, password: {type:String}
  , salt: {type: String}
	, avatar: {type: String}
}));
exports.getModel = function() {
	return model;
}
