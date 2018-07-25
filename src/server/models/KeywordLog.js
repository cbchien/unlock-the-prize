var mongoose = require('mongoose');

var KeywordLogSchema = new mongoose.Schema({
    category: { type: String },
    location: { type: String },
    keyword: { type: String },
		timestamp: { type: Date, default: Date.now() },
  }, {
	toJSON: {virtuals: true},
	toObject: { getters: true }
});

KeywordLogSchema.virtual('timestampMS').get(function() {
	return this.timestamp.getTime();
  });

module.exports = mongoose.model('KeywordLog', KeywordLogSchema);