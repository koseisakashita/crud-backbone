listView = require './list'
postCollection = require '../collections/postCollection'

UserListsView = Backbone.View.extend({
	collection: postCollection
	initialize: ->
		postCollection.fetch()

	init: ->
		@$el = $('#userList')
		@render()

	render: ->
		console.log postCollection
		_.each postCollection.models, (user) =>
			list = new listView(model:user.attributes)
			@.$el.append list.render().el
		return @
})
module.exports = new UserListsView()