var TaskController = require('./TaskController')
var UserController = require('./UserController')
var ContactController = require('./ContactController')

module.exports = {
	task: TaskController,
	user: UserController,
	contact: ContactController
}