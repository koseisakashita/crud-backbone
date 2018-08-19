module.exports = Backbone.View.extend({
	tagName: 'li'
	template: _.template '<a href="#detail/<%= id %>"><%= title %></a><span><%= body %></span>'
	render: ->
		@.$el.append(@template(@model))
		return @;
});