postModel = require '../models/post'

PostCreateView = Backbone.View.extend({

	init:  ->
		@$el = $('#create')
		@$elm = 
			inputTitle: @$el.find('#title')
			inputBody: @$el.find('#body')

		@post = new postModel()
		@post = _.extend @post,
			url: 'http://localhost:3010/users/'

		# イベントを設定する。
		@delegateEvents(
			"click #create-btn":'saveModel' 
		)

		@post.on 'locationChange', @locationChange, @
		@post.on 'invalid', @valiMessage, @

	# 投稿を作成する
	saveModel:->
		data = 
			title: @$elm.inputTitle.val()
			body: @$elm.inputBody.val()

		@post.save(data,
			success: =>
				@post.trigger 'locationChange'
		)


	# バリデートエラーメッセージを表示する。
	valiMessage: (errors) ->
		$('.vali-error-txt').empty()
		$([@$elm.inputTitle[0], @$elm.inputBody[0]]).removeClass 'vali-error'

		_.each errors.validationError, (error) =>
			$('.error' + error.name).html error.message
			$('#' + error.name).addClass 'vali-error'

	locationChange: ->
		location.replace '#'
})
module.exports = new PostCreateView()