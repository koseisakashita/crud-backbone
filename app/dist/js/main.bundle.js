/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Router, config, postListsView, router;

	config = __webpack_require__(1);

	postListsView = __webpack_require__(6);

	Router = Backbone.Router.extend({
	  initialize: function initialize() {
	    return this.rootElm = $('#app');
	  },
	  routes: {
	    'create': 'create',
	    'detail(/:id)': 'detail',
	    'delete(/:id)': 'delete',
	    '': 'index'
	  },
	  _render: function _render(view) {
	    this.rootElm.empty();
	    return this.rootElm.html($(config.tmpl[view]).html());
	  },
	  index: function index() {
	    this._render('index');
	    return postListsView.init();
	  },
	  create: function create() {
	    return this._render('create');
	  },
	  detail: function detail(id) {
	    this._render('detail');
	    return console.log('detail');
	  },
	  delete: function _delete(id) {
	    return this._render('del');
	  }
	});

	router = new Router();

	// DOMの生成が完了してからstart()させる
	$(function () {
	  return Backbone.history.start();
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var tmplArray;

	tmplArray = {};

	tmplArray.index = __webpack_require__(2);

	tmplArray.detail = __webpack_require__(3);

	tmplArray.create = __webpack_require__(4);

	tmplArray.delete = __webpack_require__(5);

	// テンプレートの不要な文字を削除する。
	_.each(tmplArray, function (tmpl, key) {
	  tmpl = tmpl.slice(18, tmpl.length - 2);
	  tmpl = tmpl.replace(/\n/g, '').replace(/\\r/g, '').replace(/\\t/g, '').replace(/\\n/g, '').replace(/\\/g, '').replace(/> </g, '><');
	  return tmplArray[key] = tmpl;
	});

	module.exports = {
	  tmpl: {
	    index: tmplArray.index,
	    detail: tmplArray.detail,
	    create: tmplArray.create,
	    del: tmplArray.delete
	  }
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=index> <section>\\r\\n\\t\\t<h2>list</h2>\\r\\n\\t\\t<div class=\\\"head\\\">\\r\\n\\t\\t\\t<div class=\\\"h-id\\\">id</div>\\r\\n\\t\\t\\t<div class=\\\"h-title\\\">title</div>\\r\\n\\t\\t\\t<div class=\\\"h-body\\\">body</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<ul id=\\\"userList\\\"></ul>\\r\\n\\t\\t<a href=\\\"#create\\\">create</a>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=detail> <section>\\r\\n\\t\\t<h2>detail</h2>\\r\\n\\t\\t<div class=\\\"head\\\">\\r\\n\\t\\t\\t<div class=\\\"h-id\\\">id</div>\\r\\n\\t\\t\\t<div class=\\\"h-title\\\">title</div>\\r\\n\\t\\t\\t<div class=\\\"h-body\\\">body</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<ul>\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"../app/#create\\\">create</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"../app/#\\\">back</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"../app/#delete/3\\\">delete</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t</ul>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=create> <section>\\r\\n\\t\\t<h2>create</h2>\\r\\n\\t\\t<div class=\\\"head\\\">\\r\\n\\t\\t\\t<div class=\\\"h-id\\\">id</div>\\r\\n\\t\\t\\t<div class=\\\"h-title\\\">title</div>\\r\\n\\t\\t\\t<div class=\\\"h-body\\\">body</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<a href=\\\"../app/#\\\">back</a>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=delete> <section>\\r\\n\\t\\t<h2>delete</h2>\\r\\n\\t\\t<div class=\\\"head\\\">\\r\\n\\t\\t\\t<div class=\\\"h-id\\\">id</div>\\r\\n\\t\\t\\t<div class=\\\"h-title\\\">title</div>\\r\\n\\t\\t\\t<div class=\\\"h-body\\\">body</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<a href=\\\"../app/#\\\">back</a>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var UserListsView, listView, postCollection;

	listView = __webpack_require__(7);

	postCollection = __webpack_require__(8);

	UserListsView = Backbone.View.extend({
	  collection: postCollection,
	  initialize: function initialize() {
	    return postCollection.fetch();
	  },
	  init: function init() {
	    this.$el = $('#userList');
	    return this.render();
	  },
	  render: function render() {
	    var _this = this;

	    console.log(postCollection);
	    _.each(postCollection.models, function (user) {
	      var list;
	      list = new listView({
	        model: user.attributes
	      });
	      return _this.$el.append(list.render().el);
	    });
	    return this;
	  }
	});

	module.exports = new UserListsView();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = Backbone.View.extend({
	  tagName: 'li',
	  template: _.template('<a href="#detail/<%= id %>"><%= title %></a><span><%= body %></span>'),
	  render: function render() {
	    this.$el.append(this.template(this.model));
	    return this;
	  }
	});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var UserCollection, postModel;

	postModel = __webpack_require__(9);

	UserCollection = Backbone.Collection.extend({
	  model: postModel,
	  url: 'http://localhost:3010/users'
	});

	module.exports = new UserCollection();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = Backbone.Model.extend({
	  defaults: {
	    id: null,
	    title: '',
	    body: ''
	  }
	});

/***/ })
/******/ ]);