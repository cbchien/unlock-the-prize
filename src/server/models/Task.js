var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({

		name: { type: String, required: true },
		description: { type: String, required: true },
		datePosted: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('Task', TaskSchema);