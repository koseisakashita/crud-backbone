module.exports = Backbone.View.extend({
	tagName: 'li'
	template: _.template '<a href="#detail/<%= id %>"><%= title %></a>'
	render: ->
		@.$el.append(@template(@model))
		return @;
});