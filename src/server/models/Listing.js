var mongoose = require('mongoose');

var ListingSchema = new mongoose.Schema({
		title: { type: String, required: true },
		description: { type: String, required: true },
		company: { type: String, required: true },
		datePosted: { type: Date, default: Date.now() },
		dateExpired: { type: Date, default: (Date.now() + 7*24*60*60*1000) },
		status: { type: String, default: 'active'},
		countQueried: { type: Number, default: 0},
		countCalled: { type: Number, default: 0},
		contact: {
			phone: { type: String, required: true },
			email: { type: String }
		},
		category: { type: String },
		keyword: [],
		weighting: { type: Number },
		address:{
			details:{ type: String, default:'Unkonwn' },
			district:{ type: String, default:'Unkonwn' },
			city:{ type: String, default:'Unkonwn' }
		}, 
  }, {
	toJSON: {virtuals: true},
	toObject: { getters: true }
});

ListingSchema.virtual('datePostedMS').get(function() {
	return this.datePosted.getTime();
  });
ListingSchema.virtual('dateExpiredMS').get(function() {
	return this.dateExpired.getTime();
  });

module.exports = mongoose.model('Listing', ListingSchema);