var ListingController = require('./ListingController')
var UserController = require('./UserController')
var ContactController = require('./ContactController')
var KeywordLogController = require('./KeywordLogController')

module.exports = {
	listing: ListingController,
	user: UserController,
	contact: ContactController,
	keywordlog: KeywordLogController,
}