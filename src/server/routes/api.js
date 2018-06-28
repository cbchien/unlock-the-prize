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
		controller.findActiveAndSortByWeighting(function(err, results){
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
	var q_time = {"dateExpired":{"$lte": new Date()}}
	var q_active = {"status":"inactive"}
	controllers["listing"].updateAndReturnActive({ $and: [ q_time] }, q_active, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: 'Update Failed'
			})
			return
		}
		res.json(result)
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
		console.log(req.body)
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

// Query for Listings.
router.get('/listing/:category/:location/:keyword', function(req, res, next){
	var q_category={}, q_city={}, q_keyword={}

	if (req.params.category != 'na'){
		var category = req.params.category.split(',');
		q_category = {"category" : new RegExp("^" + category.toString(), "i")}
	}

	if (req.params.location != 'na'){
		var location = req.params.location.split(',');
		q_city = {"address.city": {$in: location} }
	}

	if (req.params.keyword != 'na'){
		var keyword = req.params.keyword.split(',');
		q_keyword = {$or: [
			{ "keyword": {$in: keyword} },
			{ "title": {$in: keyword} }
		]}
	}

	controllers["listing"].find({
			$and: [
				q_category,
				q_city,
				q_keyword,
				{"status":"active"}
			]
		}, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: 'Category Not Found'
			})
			return
		}
		res.json(result)
	})
})

module.exports = router;
