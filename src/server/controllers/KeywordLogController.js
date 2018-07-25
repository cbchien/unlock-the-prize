var KeywordLog = require('../models/KeywordLog');

module.exports = {
	find: function(params, callback){
		KeywordLog.find(params, function(err, keywordlog){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, keywordlog)
		})
	},

	findById: function(id, callback){
		KeywordLog.findById(id, function(err, keywordlog){
			if(err){
				callback(err, null)
				return
			}
			callback(null, keywordlog)
		})
	},

	// Use the following to create and/or update
	findOneAndUpdate: function(query, params, callback){
        // upsert to create if key not found. new:true to return updated listing
		KeywordLog.findOneAndUpdate(query , (params), { upsert: true, new: true }, function(err, keywordlog){
			if (err){
				callback(err, null)
				return
            }
            console.log(keywordlog)
			callback(null, keywordlog)
		})
	},

    insert: function(params, callback){
        KeywordLog.create(params, function(err, keywordlog){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, keywordlog)
        })
    },

	aggregate: function(count, callback){
		KeywordLog.aggregate({$sample:{size:count}}, function(err, keywordlog){
			if (err) {
				callback(err, null)
				return
			}
			callback(null, keywordlog)
		})
	},

	destroy: function(id, callback){
		KeywordLog.findByIdAndRemove(id, function(err){
			if (err){
				callback(err, null)
				return 
			}

			callback(null,null)
		})
	}
}