var express = require('express');
var router = express.Router();

// Require Schema model in our routes modul
// var Job = require('../models/Job');

// import controller from //controllers/index.js which contains all controllers
var controllers = require('../controllers')

// List all by resource type
router.get('/:resource', function(req, res, next){
	var resource = req.params.resource;	
	var controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid api resource request: ' + resource,
			avaiableResources: 'job, user, category, contact'
		})
		return
	}

	controller.find(req.query, function(err, results){
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

// Find by id in resource type
router.get('/:resource/:id', function(req, res, next){
	var resource = req.params.resource;
	var id = req.params.id;
	console.log(id)
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
router.post('/:resource', function(req, res, next){
	var resource = req.params.resource;
	// logic setup to read data.oauth for User model, name for Job model, and email for Contact model
	if (resource === 'contact') {
		var id = req.body.values.email
		req.body = req.body.values
	} else if (resource === 'job'){
		var id = req.body.values.name
		req.body = req.body.values
  } else if (resource === 'user') {
    var id = { _id: req.body._id };
	} else {
		var id = {'data.oauth':req.body.data.oauth}
	}
	// var id = req.body.data? req.body.data.oauth : req.body.values.name;
	console.log('id is',id)
	console.log("resource ", resource)
	console.log("values ", req.body)
	// adjust post request from Redux-form
	// if (resource == 'job') {
	// 	req.body = req.body.values
	// }
	var controller = controllers[resource]
	
	if (controller == null){
	res.json({
		confirmation: 'fail',
		message: 'Invalid api resource request: ' + resource
	})
	return
	}

	controller.findOneAndUpdate(id, req.body, function(err, result){
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