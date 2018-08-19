config = require './config'
userListsView = require './index/views/userLists'

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
        @rootElm.html $(config.tmpl.index).html()

    index : ->
        @_render 'index'
        userListsView.init()

    create : ->
        @_render 'create'

    detail : (id) ->
        # @_render 'detail'
        console.log 'detail'

    delete : (id) ->
        @_render 'del'
})

router = new Router()

# DOMの生成が完了してからstart()させる
$( () ->
    Backbone.history.start();
)