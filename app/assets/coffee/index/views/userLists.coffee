listView = require './list'
userCollection = require '../collections/userCollection'

UserListsView = Backbone.View.extend({
	initialize: ->
		userCollection.fetch()

	init: ->
		@$el = $('#userList')
		@render()

	render: ->
		_.each userCollection.models, (user) =>
			list = new listView(model:user.attributes)
			@.$el.append list.render().el
		return @
})
module.exports = new UserListsView()