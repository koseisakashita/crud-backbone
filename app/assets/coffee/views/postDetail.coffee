postModel = require '../models/post'

PostDetailView = Backbone.View.extend({

	init: (id) ->
		@id = id || null
		@url = 'http://localhost:3010/users/' + @id
		@$el = $('#detail')
		@elm = 
			del: @$el.find('#delete').children()
			update: @$el.find('#update').children()
			inputTitle: @$el.find('#title')
			inputBody: @$el.find('#body')

		@initModel()

		@delegateEvents(
			'click #delete':'del' 
			'click #update':'update' 
		)

		@post.on 'destroy', @locationChange, @

	# リクエストのIDに応じたモデルを取得する。
	initModel: ->
		@post = new postModel()
		@post = _.extend @post,
			url: @url
		@post.fetch()

	del: ->
		res = window.confirm('削除してよろしいですか？')
		if res
			@post.destroy()

	update:->
		console.log 4343

	locationChange: ->
		location.replace '#'
})
module.exports = new PostDetailView()