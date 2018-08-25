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

	var Router, config, postCreateView, postDetailView, postListsView, router;

	config = __webpack_require__(1);

	postListsView = __webpack_require__(5);

	postDetailView = __webpack_require__(9);

	postCreateView = __webpack_require__(10);

	Router = Backbone.Router.extend({
	  initialize: function initialize() {
	    return this.rootElm = $('#app');
	  },
	  routes: {
	    'create': 'create',
	    'detail(/:id)': 'detail',
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
	    this._tmplRender('create');
	    return postCreateView.init();
	  },
	  detail: function detail(id) {
	    this._tmplRender('detail');
	    return postDetailView.init(id);
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

	module.exports = "module.exports = \"<script type=text/template id=index> <section class=\\\"index-container\\\">\\r\\n\\t\\t<div class=\\\"post-header\\\">\\r\\n\\t\\t\\t<h1>Post Lists</h1>\\r\\n\\t\\t\\t<div class=\\\"create-btn\\\">\\r\\n\\t\\t\\t\\t<a class=\\\"waves-effect waves-light btn red lighten-2\\\" href=\\\"#create\\\">create</a>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<table class=\\\"highlight\\\">\\r\\n\\t\\t\\t<thead>\\r\\n\\t\\t\\t  <tr>\\r\\n\\t\\t\\t      <th>title</th>\\r\\n\\t\\t\\t      <th>body</th>\\r\\n\\t\\t\\t  </tr>\\r\\n\\t\\t\\t</thead>\\r\\n\\t\\t\\t<tbody id=\\\"userList\\\"></tbody>\\r\\n\\t\\t</table>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template> <section class=\\\"detail-container\\\" id=\\\"detail\\\">\\r\\n\\t\\t<div class=\\\"detail-header\\\">\\r\\n\\t\\t\\t<h1>Post Detail</h1>\\r\\n\\t\\t\\t<div id=\\\"delete\\\" class=\\\"center-align btn-floating waves-effect waves-light grey lighten-2\\\">\\r\\n\\t\\t\\t\\t<a href=\\\"javascript:void(0)\\\"><i class=\\\"material-icons\\\">close</i></a>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\\"row\\\">\\r\\n\\t\\t\\t<div class=\\\"input-field col s6\\\">\\r\\n\\t\\t\\t\\t<input id=\\\"title\\\" type=\\\"text\\\"\\\">\\r\\n\\t\\t\\t\\t<label class=\\\"active\\\" for=\\\"title\\\">title</label>\\r\\n\\t\\t\\t\\t<p class=\\\"errortitle vali-error-txt\\\"></p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\\"input-field col s6\\\">\\r\\n\\t\\t\\t\\t<input id=\\\"body\\\" type=\\\"text\\\">\\r\\n\\t\\t\\t\\t<label class=\\\"active\\\" for=\\\"body\\\">body</label>\\r\\n\\t\\t\\t\\t<p class=\\\"errorbody vali-error-txt\\\"></p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\\"update-btn\\\" id=\\\"update\\\" >\\r\\n\\t\\t\\t<a class=\\\"waves-effect waves-light btn red lighten-2\\\" href=\\\"javascript:void(0)\\\">update</a>\\r\\n\\t\\t</div>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"<script type=text/template> <section class=\\\"create-container\\\" id=\\\"create\\\">\\r\\n\\t\\t<h1>Post Create</h1>\\r\\n\\t\\t<div class=\\\"row\\\">\\r\\n\\t\\t\\t<div class=\\\"input-field col s6\\\">\\r\\n\\t\\t\\t\\t<input id=\\\"title\\\" type=\\\"text\\\" class=\\\"validate\\\">\\r\\n\\t\\t\\t\\t<label class=\\\"active\\\" for=\\\"title\\\">title</label>\\r\\n\\t\\t\\t\\t<p class=\\\"errortitle vali-error-txt\\\"></p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\\"input-field col s6\\\">\\r\\n\\t\\t\\t\\t<input id=\\\"body\\\" type=\\\"text\\\" class=\\\"validate\\\">\\r\\n\\t\\t\\t\\t<label class=\\\"active\\\" for=\\\"body\\\">body</label>\\t\\r\\n\\t\\t\\t\\t<p class=\\\"errorbody vali-error-txt\\\"></p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\\"create-btn\\\">\\r\\n\\t\\t\\t<a class=\\\"waves-effect waves-light btn red lighten-2\\\" href=\\\"javascript:void(0)\\\" id=\\\"create-btn\\\">create</a>\\r\\n\\t\\t</div>\\r\\n\\t</section> </script>\";";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var UserListsView, listView, postCollection;

	listView = __webpack_require__(6);

	postCollection = __webpack_require__(7);

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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var UserCollection, postModel;

	postModel = __webpack_require__(8);

	UserCollection = Backbone.Collection.extend({
	  model: postModel,
	  url: 'http://localhost:3010/users'
	});

	module.exports = new UserCollection();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = Backbone.Model.extend({
	  defaults: {
	    id: null,
	    title: '',
	    body: ''
	  },
	  validate: function validate(attr) {
	    var errors;
	    errors = [];
	    if (_.isEmpty(attr.title)) {
	      errors.push({
	        name: 'title',
	        message: 'empty title!'
	      });
	    }
	    if (_.isEmpty(attr.body)) {
	      errors.push({
	        name: 'body',
	        message: 'empty body!'
	      });
	    }
	    if (errors.length > 0) {
	      return errors;
	    }
	  }
	});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var PostDetailView, postModel;

	postModel = __webpack_require__(8);

	PostDetailView = Backbone.View.extend({
	  init: function init(id) {
	    this.id = id || null;
	    this.url = 'http://localhost:3010/users/' + this.id;
	    this.$el = $('#detail');
	    this.$elm = {
	      update: this.$el.find('#update').children(),
	      inputTitle: this.$el.find('#title'),
	      inputBody: this.$el.find('#body')
	    };
	    this.setModel();
	    // イベントを設定する。
	    this.delegateEvents({
	      'click #delete': 'del',
	      'click #update': 'update'
	    });
	    this.post.on('locationChange', this.locationChange, this);
	    return this.post.on('invalid', this.valiMessage, this);
	  },
	  // リクエストのIDに応じたモデルを取得して初期値を設定する。
	  setModel: function setModel() {
	    var _this = this;

	    this.post = new postModel();
	    this.post = _.extend(this.post, {
	      url: this.url
	    });
	    return this.post.fetch({
	      success: function success() {
	        _this.$elm.inputTitle.val(_this.post.attributes.title);
	        return _this.$elm.inputBody.val(_this.post.attributes.body);
	      }
	    });
	  },
	  // 表示されている投稿を削除する。
	  del: function del() {
	    var _this2 = this;

	    var res;
	    res = window.confirm('削除してよろしいですか？');
	    if (res) {
	      return this.post.destroy({
	        success: function success() {
	          return _this2.post.trigger('locationChange');
	        },
	        error: function error() {
	          return location.reload();
	        }
	      });
	    }
	  },
	  // 表示されている投稿を更新する
	  update: function update() {
	    var _this3 = this;

	    var data;
	    data = {
	      id: this.id,
	      title: this.$elm.inputTitle.val(),
	      body: this.$elm.inputBody.val()
	    };
	    return this.post.save(data, {
	      success: function success() {
	        return _this3.post.trigger('locationChange');
	      }
	    });
	  },
	  // バリデートエラーメッセージを表示する。
	  valiMessage: function valiMessage(errors) {
	    $('.vali-error-txt').empty();
	    $([this.$elm.inputTitle[0], this.$elm.inputBody[0]]).removeClass('vali-error');
	    return _.each(errors.validationError, function (error) {
	      $('.error' + error.name).html(error.message);
	      return $('#' + error.name).addClass('vali-error');
	    });
	  },
	  locationChange: function locationChange() {
	    return location.replace('#');
	  }
	});

	module.exports = new PostDetailView();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var PostCreateView, postModel;

	postModel = __webpack_require__(8);

	PostCreateView = Backbone.View.extend({
	  init: function init() {
	    this.$el = $('#create');
	    this.$elm = {
	      inputTitle: this.$el.find('#title'),
	      inputBody: this.$el.find('#body')
	    };
	    this.post = new postModel();
	    this.post = _.extend(this.post, {
	      url: 'http://localhost:3010/users/'
	    });
	    // イベントを設定する。
	    this.delegateEvents({
	      "click #create-btn": 'saveModel'
	    });
	    this.post.on('locationChange', this.locationChange, this);
	    return this.post.on('invalid', this.valiMessage, this);
	  },
	  // 投稿を作成する
	  saveModel: function saveModel() {
	    var _this = this;

	    var data;
	    data = {
	      title: this.$elm.inputTitle.val(),
	      body: this.$elm.inputBody.val()
	    };
	    return this.post.save(data, {
	      success: function success() {
	        return _this.post.trigger('locationChange');
	      }
	    });
	  },
	  // バリデートエラーメッセージを表示する。
	  valiMessage: function valiMessage(errors) {
	    $('.vali-error-txt').empty();
	    $([this.$elm.inputTitle[0], this.$elm.inputBody[0]]).removeClass('vali-error');
	    return _.each(errors.validationError, function (error) {
	      $('.error' + error.name).html(error.message);
	      return $('#' + error.name).addClass('vali-error');
	    });
	  },
	  locationChange: function locationChange() {
	    return location.replace('#');
	  }
	});

	module.exports = new PostCreateView();

/***/ })
/******/ ]);