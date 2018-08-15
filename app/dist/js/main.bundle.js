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

	var Router, config, router, tmpl;

	config = __webpack_require__(1);

	tmpl = config.config.tmpl;

	Router = Backbone.Router.extend({
	  initialize: function initialize() {
	    return this.rootElm = $('#app');
	  },
	  _render: function _render(view) {
	    console.log($(tmpl[view]).html());
	    this.rootElm.empty();
	    return this.rootElm.html($(tmpl[view]).html());
	  },
	  routes: {
	    'create': 'create',
	    'detail(/:id)': 'detail',
	    'delete(/:id)': 'delete',
	    '': 'index'
	  },
	  index: function index() {
	    return this._render('index');
	  },
	  create: function create() {
	    return this._render('create');
	  },
	  detail: function detail(id) {
	    return this._render('detail');
	  },
	  delete: function _delete(id) {
	    this._render('del');
	    return console.log('delete');
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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var create, deleteUser, detail, index, tmplArray;

	index = __webpack_require__(2);

	deleteUser = __webpack_require__(3);

	create = __webpack_require__(4);

	detail = __webpack_require__(5);

	tmplArray = {};

	tmplArray.index = __webpack_require__(6);

	tmplArray.detail = __webpack_require__(7);

	tmplArray.create = __webpack_require__(8);

	tmplArray.delete = __webpack_require__(9);

	// テンプレートの不要な文字を削除する。
	_.each(tmplArray, function (tmpl, key) {
	  tmpl = tmpl.slice(18, tmpl.length - 2);
	  tmpl = tmpl.replace(/\n/g, '').replace(/\\r/g, '').replace(/\\t/g, '').replace(/\\n/g, '').replace(/\\/g, '').replace(/> </g, '><');
	  return tmplArray[key] = tmpl;
	});

	var config = exports.config = {
	  index: index,
	  deleteUser: deleteUser,
	  create: create,
	  detail: detail,
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var index = exports.index = function index() {
	  _classCallCheck(this, index);
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var deleteUser = exports.deleteUser = function deleteUser() {
	  _classCallCheck(this, deleteUser);
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var create = exports.create = function create() {
	  _classCallCheck(this, create);

	  console.log(5353);
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var detail = exports.detail = function detail() {
	  _classCallCheck(this, detail);
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=index> <section>\\r\\n\\t\\t<h2>list</h2>\\r\\n\\t\\t<div class=\\\"head\\\">\\r\\n\\t\\t\\t<div class=\\\"h-id\\\">id</div>\\r\\n\\t\\t\\t<div class=\\\"h-title\\\">title</div>\\r\\n\\t\\t\\t<div class=\\\"h-body\\\">body</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<ul>\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"#detail/3\\\">title</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"#detail/3\\\">title</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"#detail/3\\\">title</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t</ul>\\r\\n\\t\\t<a href=\\\"#create\\\">crate</a>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=detail> <section>\\r\\n\\t\\t<h2>detail</h2>\\r\\n\\t\\t<div class=\\\"head\\\">\\r\\n\\t\\t\\t<div class=\\\"h-id\\\">id</div>\\r\\n\\t\\t\\t<div class=\\\"h-title\\\">title</div>\\r\\n\\t\\t\\t<div class=\\\"h-body\\\">body</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<ul>\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"../app/#create\\\">create</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"../app/#\\\">back</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"../app/#delete/3\\\">delete</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t</ul>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=create> <section>\\r\\n\\t\\t<h2>create</h2>\\r\\n\\t\\t<div class=\\\"head\\\">\\r\\n\\t\\t\\t<div class=\\\"h-id\\\">id</div>\\r\\n\\t\\t\\t<div class=\\\"h-title\\\">title</div>\\r\\n\\t\\t\\t<div class=\\\"h-body\\\">body</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<a href=\\\"../app/#\\\">back</a>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template id=delete> <section>\\r\\n\\t\\t<h2>delete</h2>\\r\\n\\t\\t<div class=\\\"head\\\">\\r\\n\\t\\t\\t<div class=\\\"h-id\\\">id</div>\\r\\n\\t\\t\\t<div class=\\\"h-title\\\">title</div>\\r\\n\\t\\t\\t<div class=\\\"h-body\\\">body</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<a href=\\\"../app/#\\\">back</a>\\r\\n\\t</section> </script>\";";

/***/ })
/******/ ]);