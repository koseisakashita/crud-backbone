listView = require './list'
postCollection = require '../collections/postCollection'

UserListsView = Backbone.View.extend({
	collection: postCollection

	init: ->
		postCollection.fetch(
			success: (collection, res, opt) =>
				@$el = $('#userList')
				@render()
		)

	render: ->
		_.each postCollection.models, (user) =>
			list = new listView(model:user.attributes)
			@.$el.append list.render().el
		return @
})
module.exports = new UserListsView()