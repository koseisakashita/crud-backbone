module.exports = Backbone.View.extend({
	tagName: 'tr'
	template: _.template '<td><a href="#detail/<%= id %>"><%= title %></a></td><td><%= body %></td>'
	
	render: ->
		@.$el.append(@template(@model))
		return @;
});