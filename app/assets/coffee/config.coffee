index = require './index/app'
deleteUser = require  './delete/app'
create = require './create/app'
detail = require './detail/app'
tmplArray = {}
tmplArray.index = require 'html!template/index.html'
tmplArray.detail = require 'html!template/detail.html'
tmplArray.create = require 'html!template/create.html'
tmplArray.delete = require 'html!template/delete.html'

# テンプレートの不要な文字を削除する。
_.each tmplArray, (tmpl, key) ->
    tmpl = tmpl.slice 18, tmpl.length-2
    tmpl = tmpl.replace /\n/g, ''
        .replace /\\r/g, ''
        .replace /\\t/g, ''
        .replace /\\n/g, ''
        .replace /\\/g, ''
        .replace /> </g, '><'
    tmplArray[key] = tmpl

export config = 
    index: index,
    deleteUser: deleteUser,
    create: create,
    detail:detail,
    tmpl: {
        index: tmplArray.index,
        detail: tmplArray.detail,
        create: tmplArray.create,
        del: tmplArray.delete
    }