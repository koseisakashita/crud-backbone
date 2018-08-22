config = require './config'
postListsView = require './views/postLists'
postDetail = require './views/postDetail'

Router = Backbone.Router.extend({
    initialize: ->
        @rootElm = $('#app')
        
    routes :
        'create' : 'create',
        'detail(/:id)' : 'detail',
        'delete(/:id)' : 'delete',
        '' : 'index',

    _tmplRender: (view) ->
        @rootElm.empty()
        @rootElm.html $(config.tmpl[view]).html()

    index : ->
        @_tmplRender 'index'
        postListsView.init()

    create : ->
        @_tmplRender 'create'

    detail : (id) ->
        @_tmplRender 'detail'
        postDetail.init(id)

    delete : (id) ->
        @_tmplRender 'del'
})

router = new Router()

# DOMの生成が完了してからstart()させる
$( () ->
    Backbone.history.start();
)