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
	  _tmplRender: function _tmplRender(view) {
	    this.rootElm.empty();
	    return this.rootElm.html($(config.tmpl[view]).html());
	  },
	  index: function index() {
	    this._tmplRender('index');
	    return postListsView.init();
	  },
	  create: function create() {
	    return this._tmplRender('create');
	  },
	  detail: function detail(id) {
	    this._tmplRender('detail');
	    return console.log('detail');
	  },
	  delete: function _delete(id) {
	    return this._tmplRender('del');
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

	var tmplLists;

	tmplLists = {};

	tmplLists.index = __webpack_require__(2);

	tmplLists.detail = __webpack_require__(3);

	tmplLists.create = __webpack_require__(4);

	tmplLists.delete = __webpack_require__(5);

	// テンプレートの不要な文字を削除する。
	_.each(tmplLists, function (tmpl, key) {
	  tmpl = tmpl.slice(18, tmpl.length - 2);
	  tmpl = tmpl.replace(/\n/g, '').replace(/\\r/g, '').replace(/\\t/g, '').replace(/\\n/g, '').replace(/\\/g, '').replace(/> </g, '><');
	  return tmplLists[key] = tmpl;
	});

	module.exports = {
	  tmpl: {
	    index: tmplLists.index,
	    detail: tmplLists.detail,
	    create: tmplLists.create,
	    del: tmplLists.delete
	  }
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=index> <section class=\\\"index-container\\\">\\r\\n\\t\\t<h1>Post Lists</h1>\\r\\n\\t\\t<table class=\\\"highlight\\\">\\r\\n\\t\\t\\t<thead>\\r\\n\\t\\t\\t  <tr>\\r\\n\\t\\t\\t      <th>title</th>\\r\\n\\t\\t\\t      <th>body</th>\\r\\n\\t\\t\\t  </tr>\\r\\n\\t\\t\\t</thead>\\r\\n\\t\\t\\t<tbody id=\\\"userList\\\"></tbody>\\r\\n\\t\\t</table>\\r\\n\\t\\t<div class=\\\"create-btn\\\">\\r\\n\\t\\t\\t<a class=\\\"waves-effect waves-light btn red lighten-2\\\" href=\\\"#create\\\">create</a>\\r\\n\\t\\t</div>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=detail> <section class=\\\"detail-container\\\">\\r\\n\\t\\t<div class=\\\"detail-header\\\">\\r\\n\\t\\t\\t<h1>Post Detail</h1>\\r\\n\\t\\t\\t<div id=\\\"delete\\\" class=\\\"center-align btn-floating waves-effect waves-light grey lighten-2\\\">\\r\\n\\t\\t\\t\\t<a><i class=\\\"material-icons\\\">close</i></a>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\\"row\\\">\\r\\n\\t\\t\\t<div class=\\\"input-field col s6\\\">\\r\\n\\t\\t\\t\\t<input id=\\\"title\\\" type=\\\"text\\\" class=\\\"validate\\\">\\r\\n\\t\\t\\t\\t<label class=\\\"active\\\" for=\\\"title\\\">title</label>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\\"input-field col s6\\\">\\r\\n\\t\\t\\t\\t<input id=\\\"body\\\" type=\\\"text\\\" class=\\\"validate\\\">\\r\\n\\t\\t\\t\\t<label class=\\\"active\\\" for=\\\"body\\\">body</label>\\t\\t\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\\"update-btn\\\">\\r\\n\\t\\t\\t<a class=\\\"waves-effect waves-light btn red lighten-2\\\" id=\\\"update\\\" href=\\\"javascript:void(0)\\\">update</a>\\r\\n\\t\\t</div>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=create> <section class=\\\"create-container\\\">\\r\\n\\t\\t<h1>Post Create</h1>\\r\\n\\t\\t<div class=\\\"row\\\">\\r\\n\\t\\t\\t<div class=\\\"input-field col s6\\\">\\r\\n\\t\\t\\t\\t<input id=\\\"title\\\" type=\\\"text\\\" class=\\\"validate\\\">\\r\\n\\t\\t\\t\\t<label class=\\\"active\\\" for=\\\"title\\\">title</label>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\\"input-field col s6\\\">\\r\\n\\t\\t\\t\\t<input id=\\\"body\\\" type=\\\"text\\\" class=\\\"validate\\\">\\r\\n\\t\\t\\t\\t<label class=\\\"active\\\" for=\\\"body\\\">body</label>\\t\\t\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\\"create-btn\\\">\\r\\n\\t\\t\\t<a class=\\\"waves-effect waves-light btn red lighten-2\\\" href=\\\"../app/#\\\">create</a>\\r\\n\\t\\t</div>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=delete> <section class=\\\"delete-container\\\">\\r\\n\\t\\t<h1>Post Delete</h1>\\r\\n\\t\\t<table class=\\\"highlight\\\">\\r\\n\\t\\t\\t<thead>\\r\\n\\t\\t\\t  <tr>\\r\\n\\t\\t\\t      <th>id</th>\\r\\n\\t\\t\\t      <th>title</th>\\r\\n\\t\\t\\t      <th>body</th>\\r\\n\\t\\t\\t  </tr>\\r\\n\\t\\t\\t</thead>\\r\\n\\t\\t\\t<tbody id=\\\"userList\\\"></tbody>\\r\\n\\t\\t</table>\\r\\n\\t\\t<div class=\\\"create-btn\\\">\\r\\n\\t\\t\\t<a class=\\\"waves-effect waves-light btn grey\\\" href=\\\"../app/#\\\">back</a>\\r\\n\\t\\t\\t<a class=\\\"waves-effect waves-light btn red lighten-2\\\" href=\\\"#create\\\">delete</a>\\r\\n\\t\\t</div>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var UserListsView, listView, postCollection;

	listView = __webpack_require__(7);

	postCollection = __webpack_require__(8);

	UserListsView = Backbone.View.extend({
	  collection: postCollection,
	  init: function init() {
	    var _this = this;

	    return postCollection.fetch({
	      success: function success(collection, res, opt) {
	        _this.$el = $('#userList');
	        return _this.render();
	      }
	    });
	  },
	  render: function render() {
	    var _this2 = this;

	    if (_.isEmpty(postCollection.models)) {
	      this.$el.addClass('data-none').text('post nothing...');
	      return;
	    }
	    _.each(postCollection.models, function (user) {
	      var list;
	      list = new listView({
	        model: user.attributes
	      });
	      return _this2.$el.append(list.render().el);
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
	  tagName: 'tr',
	  template: _.template('<td><a href="#detail/<%= id %>"><%= title %></a></td><td><%= body %></td>'),
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