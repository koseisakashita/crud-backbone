postModel = require '../models/post'

PostDetailView = Backbone.View.extend({

	init: (id) ->
		@id = id || null
		@url = 'http://localhost:3010/users/' + @id
		@$el = $('#detail')
		@$elm = 
			update: @$el.find('#update').children()
			inputTitle: @$el.find('#title')
			inputBody: @$el.find('#body')

		@setModel()

		# イベントを設定する。
		@delegateEvents(
			'click #delete':'del' 
			'click #update':'update' 
		)
		@post.on 'locationChange', @locationChange, @

	# リクエストのIDに応じたモデルを取得して初期値を設定する。
	setModel: ->
		@post = new postModel()
		@post = _.extend @post,
			url: @url
		@post.fetch(
			success: =>
				@$elm.inputTitle.val @post.attributes.title
				@$elm.inputBody.val @post.attributes.body
		)

	# 表示されている投稿を削除する。
	del: ->
		res = window.confirm('削除してよろしいですか？')
		if res
			@post.destroy(
				success: =>
					@post.trigger 'locationChange'
				error: =>
					location.reload()
			)

	# 表示されている投稿を更新する
	update:->
		data = 
			id: @id
			title: @$elm.inputTitle.val()
			body: @$elm.inputBody.val()

		@post.save(data,
			success: =>
				@post.trigger 'locationChange'
		)

	locationChange: ->
		location.replace '#'
})
module.exports = new PostDetailView()