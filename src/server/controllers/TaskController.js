var Task = require('../models/Task');

module.exports = {

	find: function(params, callback){
		Task.find(params, function(err, task){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, task)
		})
	},

	findById: function(id, callback){
		Task.findById(id, function(err, task){
			if(err){
				callback(err, null)
				return
			}
			callback(null, task)
		})
	},

	// Use the following to create and/or update
	findOneAndUpdate: function(key, params, callback){
		// following lines to format keyword into [a,b,c,...] from [[a,b,c]]
		try {
	 		var keywords = params['category.keyword']
			var keyword = keywords.split(',')
			var newKeywords = []
			keyword.forEach(function(thiskeyword){
				newKeywords.push(thiskeyword.trim())
			})
			params['category.keyword'] = newKeywords
		} catch(err) {
		}
		// upsert to create if key not found. new:true to return updated task
		Task.findOneAndUpdate({"name":key} , (params), { upsert: true, new: true }, function(err, task){
			if (err){
				callback(err, null)
				return
			}
			callback(null, task)
		})
	},

	update: function(id, params, callback){
		Task.findByIdAndUpdate(id, params, {new:true}, function(err, task){
			if (err){
				callback(err, null)
				return
			}
			callback(null, task)
		})
	},

	aggregate: function(count, callback){
		Task.aggregate({$sample:{size:count}}, function(err, task){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, task)
		})
	},

	destroy: function(id, callback){
		Task.findByIdAndRemove(id, function(err){
			if (err){
				callback(err, null)
				return 
			}

			callback(null,null)
		})
	}
}