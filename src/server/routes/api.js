var express = require('express');
var router = express.Router();

// Require Schema model in our routes modul
// var Job = require('../models/Job');

// import controller from //controllers/index.js which contains all controllers
var controllers = require('../controllers')

// List all by resource type
router.get('/:resource', function(req, res){
	var resource = req.params.resource;	
	var controller = controllers[resource]
	var query = req.query

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid api resource request: ' + resource,
			avaiableResources: 'job, user, category, contact'
		})
		return
	}

	if (resource == 'listing') {
		var queryFind = {"dateExpired":{ $gte : Date.now() }}
		// var paramsFind = {countCalled:0, countQueried:0, __v:0}
		var paramsFind = {__v:0}
		var queryUpdate = {}
		var paramsUpdate = {}
		controller.findAndSortByWeighting(queryUpdate, paramsUpdate, queryFind, paramsFind, function(err, results){
			if (err){
					res.json({ 
						confirmation: 'fail',
						resource: err
					})
				return;
			}
			res.json(results)
		})
		// Exit api call
		return;
	}

	controller.find(query, function(err, results){
		if (err){
				res.json({ 
					confirmation: 'fail',
					resource: err
				})
			return;
		}
		// res.json({ confirmation: 'success',resource: results })
		res.json(results)
	})
})

// Refresh database listing for expired listings
router.get('/listing/refresh', function(req, res, next){
	var paramsUpdate = {"status":"inactive"}
	var queryUpdate = { $and: [ {"dateExpired":{"$lte": new Date()}} ] }
	var queryFind = {"status":"active"}
	controllers["listing"].updateAndReturn(queryUpdate, queryFind, paramsUpdate, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: 'Update Failed'
			})
			return
		}
		res.json({
				confirmation: 'success!',
				message: 'Database refresh done. Expired post status updated success!',
				data: result
			})
		// res.json(result)
	})
})

// Return a list of all cities
router.get('/listing/categorylist', function(req, res){
	const categoryList = ["運輸","家事及服務","餐飲","保全", "修繕","行政客服","作業員"]
	
	res.json({
		message: 'All category',
		data: categoryList
	})
})

// Return a list of all cities
router.get('/listing/citylist', function(req, res){
	const cityList = ["台北市","新北市","基隆市","桃園市","新竹市",
                   "新竹縣","苗栗縣","台中市","彰化縣","南投縣",
                   "雲林縣","嘉義市","嘉義縣","台南市","高雄市",
                   "屏東縣","台東縣","花蓮縣","宜蘭縣","澎湖縣"]
	
	res.json({
		message: 'All cities',
		data: cityList
	})
})

// Query for Listings.
//router.get('/listing/:category/:location/:keyword', function(req, res, next){
	router.get('/listing/filter', function(req, res, next){
		var q_category={}, q_city={}, q_keyword={}
	
		if (req.query.category != 'na' && req.query.category){
			var category = req.query.category.split(',');
			for (var i = 0; i < category.length; i++) {
				category[i] = new RegExp("^" + category[i].toString(), "i")
			}
			q_category = {"category" : { $in: category} }
		}
	
		if (req.query.city != 'na' && req.query.city){
			var cities = req.query.city.split(',');
			q_city = {"address.city": {$in: cities} }
		}
	
		if (req.query.keyword != 'na' && req.query.keyword){
			var keyword = req.query.keyword.split(',');
			for (var j = 0; j < keyword.length; j++) {
				keyword[j] = new RegExp("^" + keyword[j].toString(), "i")
			}
			q_keyword = {$or: [
				{ "keyword": {$in: keyword} },
				{ "title": {$in: keyword} }
			]}
		}
		
		var queryFind = {
			$and: [
				q_category,
				q_city,
				q_keyword,
				{"status":"active"}
			]
		}
		var paramsFind = {countCalled:0, countQueried:0, __v:0}
		var queryUpdate = queryFind
		var paramsUpdate = { $inc: { countQueried: 1 } }
	
		// Log keyword query
		controllers["keywordlog"].insert({ category: req.params.category, location: req.params.location, keyword: req.params.keyword }, function(err, results){
			if (err){
					res.json({ 
						confirmation: 'fail',
						resource: err
					})
				return;
			}
		})
	
		controllers["listing"].findAndSortByWeighting(queryUpdate, paramsUpdate, queryFind, paramsFind, function(err, results){
			if (err){
					res.json({ 
						confirmation: 'fail',
						resource: err
					})
				return;
			}
			res.json(results)
		})
	})
	
// Add call phone call count
router.post('/listing/addcallcount/:listingId', function(req, res, next){
	var listingId = req.params.listingId;	
	var queryFind = {"_id": listingId,}
	var paramsFind = {countQueried:0, __v:0}
	var queryUpdate = queryFind
	var paramsUpdate = { $inc: { countCalled: 1 } }
	controllers["listing"].findAndSortByWeighting(queryUpdate, paramsUpdate, queryFind, paramsFind, function(err, results){
		if (err){
				res.json({ 
					confirmation: 'fail',
					resource: err
				})
			return;
		} else if (results.length < 1) {
			res.json({ 
				confirmation: 'Listing ID not found',
				result: results
			})
			return
		}

		res.json({
			confirmation: 'added call count for ' + listingId,
			result: results
		})
	})
})

// Find by id in resource type
router.get('/:resource/:id', function(req, res){
	var resource = req.params.resource;
	var id = req.params.id;
	// console.log(id)
	var controller = controllers[resource]
	if (controller == null){
	res.json({
		confirmation: 'fail',
		message: 'Invalid api resource request: ' + resource
	})

	return
	}

	controller.findById(id, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: 'Id Not Found'
			})
			return
		}
		res.json(result)
	})
})

// Find and Update
router.post('/:resource', function(req, res){
	var resource = req.params.resource;
	var id, data
	// logic setup to read data.oauth for User model, name for Job model, and email for Contact model
	if (resource === 'contact') {
		id = req.body.values.email
		data = req.body.values
	} else if (resource === 'listing'){
		// id = req.body.values.title
		// req.body = req.body.values
		id = req.body.title
		data = req.body
  	} else if (resource === 'user') {
    	id = { _id: req.body._id };
	} else {
		id = {'data.oauth':req.body.data.oauth}
	}

	var controller = controllers[resource]
	
	if (controller == null){
	res.json({
		confirmation: 'fail',
		message: 'Invalid api resource request: ' + resource
	})
	return
	}

	controller.findOneAndUpdate(id, data, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}
		res.json(result)
	})
})


module.exports = router;
