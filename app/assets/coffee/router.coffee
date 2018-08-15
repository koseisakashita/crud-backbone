config = require './config'
tmpl = config.config.tmpl

Router = Backbone.Router.extend({
    initialize: ->
        @rootElm = $('#app')

    _render: (view) ->
        console.log $(tmpl[view]).html()
        @rootElm.empty()
        @rootElm.html $(tmpl[view]).html()

    routes :
        'create' : 'create',
        'detail(/:id)' : 'detail',
        'delete(/:id)' : 'delete',
        '' : 'index',

    index : ->
        @_render 'index'

    create : ->
        @_render 'create'

    detail : (id) ->
        @_render 'detail'

    delete : (id) ->
        @_render 'del'
        console.log('delete')
})

router = new Router()

# DOMの生成が完了してからstart()させる
$( () ->
    Backbone.history.start();
)