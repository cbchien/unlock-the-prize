var Listing = require('../models/Listing');

module.exports = {

	find: function(params, callback){
		Listing.find(params, function(err, listing){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, listing)
		})
	},

	findById: function(id, callback){
		Listing.findById(id, function(err, listing){
			if(err){
				callback(err, null)
				return
			}
			callback(null, listing)
		})
	},

	// Use the following to create and/or update
	findOneAndUpdate: function(query, params, callback){
		// upsert to create if key not found. new:true to return updated listing
		Listing.findOneAndUpdate(query , (params), { upsert: true, new: true }, function(err, listing){
			if (err){
				callback(err, null)
				return
			}
			callback(null, listing)
		})
	},

	findActiveAndSortByWeighting: function(callback){
		Listing.find({"status":"active"}, {}, {sort: {weighting: -1, datePosted: -1}}, function(err, listing){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, listing)
		})
	},

	updateAndReturnActive: function(query, params, callback){
		Listing.update(query, params, {upsert:false, multi:true}, function(err){
			if (err){
				callback(err, null)
				return
			}
			Listing.find({"status":"active"}, function(err, listing){
				if (err) {
					callback(err, null)
					return
				}
				callback(null, listing)
			})
		})
	},

	updateById: function(id, params, callback){
		Listing.findByIdAndUpdate(id, params, {new:true}, function(err, listing){
			if (err){
				callback(err, null)
				return
			}
			callback(null, listing)
		})
	},

	aggregate: function(count, callback){
		Listing.aggregate({$sample:{size:count}}, function(err, listing){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, listing)
		})
	},

	destroy: function(id, callback){
		Listing.findByIdAndRemove(id, function(err){
			if (err){
				callback(err, null)
				return 
			}

			callback(null,null)
		})
	}
}