module.exports = Backbone.Model.extend({
	defaults:
		id: null
		title: ''
		body: ''

	validate: (attr) ->
		errors = []
		if _.isEmpty attr.title
			errors.push( 
				name: 'title'
				message: 'empty title!'
			)
		if _.isEmpty attr.body
			errors.push( 
				name: 'body'
				message: 'empty body!'
			)

		if errors.length > 0 then return errors
})
