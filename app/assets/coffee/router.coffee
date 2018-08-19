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

    _render: (view) ->
        @rootElm.empty()
        @rootElm.html $(config.tmpl[view]).html()

    index : ->
        @_render 'index'
        postListsView.init()

    create : ->
        @_render 'create'

    detail : (id) ->
        @_render 'detail'
        console.log 'detail'

    delete : (id) ->
        @_render 'del'
})

router = new Router()

# DOMの生成が完了してからstart()させる
$( () ->
    Backbone.history.start();
)