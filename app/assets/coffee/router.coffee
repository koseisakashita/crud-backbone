config = require './config'
postListsView = require './index/views/postLists'

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
        console.log 'detail'

    delete : (id) ->
        @_tmplRender 'del'
})

router = new Router()

# DOMの生成が完了してからstart()させる
$( () ->
    Backbone.history.start();
)