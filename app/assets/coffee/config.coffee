tmplLists = {}
tmplLists.index = require 'html!template/index.html'
tmplLists.detail = require 'html!template/detail.html'
tmplLists.create = require 'html!template/create.html'

# テンプレートの不要な文字を削除する。
_.each tmplLists, (tmpl, key) ->
    tmpl = tmpl.slice 18, tmpl.length-2
    tmpl = tmpl.replace /\n/g, ''
        .replace /\\r/g, ''
        .replace /\\t/g, ''
        .replace /\\n/g, ''
        .replace /\\/g, ''
        .replace /> </g, '><'
    tmplLists[key] = tmpl

module.exports = 
    tmpl:
        index: tmplLists.index,
        detail: tmplLists.detail,
        create: tmplLists.create