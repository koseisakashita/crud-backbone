config = require './config'
postListsView = require './views/postLists'
postDetailView = require './views/postDetail'
postCreateView = require './views/postCreate'

Router = Backbone.Router.extend({
    initialize: ->
        @rootElm = $('#app')
        
    routes :
        'create' : 'create',
        'detail(/:id)' : 'detail',
        '' : 'index',

    _tmplRender: (view) ->
        @rootElm.empty()
        @rootElm.html $(config.tmpl[view]).html()

    index : ->
        @_tmplRender 'index'
        postListsView.init()

    create : ->
        @_tmplRender 'create'
        postCreateView.init()

    detail : (id) ->
        @_tmplRender 'detail'
        postDetailView.init(id)
})

router = new Router()

# DOMの生成が完了してからstart()させる
$( () ->
    Backbone.history.start();
)