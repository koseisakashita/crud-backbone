postModel = require '../models/post'
# listView = require './list'

UserCollection = Backbone.Collection.extend({
	model:postModel.Post
	url: 'http://localhost:3010/users'
})
module.exports = new UserCollection()