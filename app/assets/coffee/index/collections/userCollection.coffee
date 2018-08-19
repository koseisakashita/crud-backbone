postModel = require '../models/post'

UserCollection = Backbone.Collection.extend({
	model:postModel
	url: 'http://localhost:3010/users'
})
module.exports = new UserCollection()