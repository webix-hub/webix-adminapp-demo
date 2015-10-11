define([
	"libs/routie"
],function(){

	function show(path, config){
		if (config == -1)
			return render_sub_stack(this, path);
		if (this._subs[path])
			return render_sub_stack(this._subs[path], config);
		

		var scope = get_app_scope(this);
		var index = this.index;

		if (typeof path == "string"){
			var index = index;

			//child page
			if (path.indexOf("./") === 0){
				index++;
				path = path.substr(2);
			}

			//route to page
			var parsed = parse_parts(path);
			scope.path = scope.path.slice(0, index).concat(parsed);
		} else {
			//set parameters
			webix.extend(scope.path[index].params, path, true);
		}

		scope.show(url_string(scope.path), -1);
	}

	function get_app_scope(scope){
		while(scope){
			if (scope.app)
				return scope;
			scope = scope.parent;
		}
		return app;
	}

	function url_string(stack){
		var url = [];
		var start = app.config.layout ? 1 : 0;

		for (; start<stack.length; start++){
			url.push("/"+stack[start].page);
			var params = params_string(stack[start].params);
			if (params)
				url.push(":"+params);
		}

		return url.join("");
	}
	function params_string(obj){
		var str = [];
		for (var key in obj){
			if (str.length)
				str.push(":");
			str.push(key+"="+obj[key]);
		}
		
		return str.join("");
	}


	function subui(ui, name, stack){
		if (run_plugins(url_plugins, ui, name, stack, this) === false) return;

		if (name.page != this.name){
			this.name = name.page;
			this.ui = create_temp_ui;
			this.on = create_temp_event;
			this.show = show;
			this.module = ui;
			
			destroy.call(this);

			//collect init and destory handlers
			//set subview container
			this._init = [];
			this._destroy = [];
			this._subs = {};
			this.$layout = false;

			var subview = copy(ui, null, this);
				subview.$scope = this;

			create.call(this, subview);
		
			//prepare layout for view loading
			if (this.$layout){
				this.$layout = {
					root : (this._ui.$$ || webix.$$)(this.name+":subview"),
					sub: 		subui,
					parent: 	this,
					index: 		this.index + 1
				};
			}
		}

		run_plugins(ui_plugins, ui, name, stack, this);

		if (!ui.$onurlchange || ui.$onurlchange.call(ui, name.params, stack, this) !== false)
			return this.$layout;
	}

	function parse_parts(url){
		//split url by "/"
		var chunks = url.split("/");
		
		//use optional default layout page
		if (!chunks[0]){
			if (app.config.layout)
			 	chunks[0] = app.config.layout;
			else
				chunks.shift();
		}

		//for each page in url
		for (var i = 0; i < chunks.length; i++){
			var test = chunks[i];
			var result = [];

			//detect params
			var pos = test.indexOf(":");
			if (pos !== -1){
				var params = test.substr(pos+1).split(":");
				//detect named params
				var objmode = params[0].indexOf("=") !== -1;

				//create hash of named params
				if (objmode){
					result = {};
					for (var j = 0; j < params.length; j++) {
						var dchunk = params[j].split("=");
						result[dchunk[0]] = dchunk[1];
					}
				} else {
					result = params;
				}
			}
			
			//store parsed values
			chunks[i] = { page: (pos > -1 ? test.substr(0, pos) : test), params:result };
		}

		//return array of page objects
		return chunks;
	}

	function copy(obj, target, config){
		if (obj.$oninit)
			config._init.push(obj.$oninit);
		if (obj.$ondestroy)
			config._destroy.push(obj.$ondestroy);
		if (obj.$subview){
			if (typeof obj.$subview == "string"){
				var tname = (config.name + ":subview:"+obj.$subview);
				var tobj = config._subs[obj.$subview] = { 
					parent:this,
					root: tname,
					sub:subui,
					index:0,
					app:true
				};

				obj.id   = tname;
			} else {
				obj = { id: (config.name + ":subview") };
				config.$layout = true;
			}
		}
		if (obj.$ui)
			obj = obj.$ui;
		if (obj.$init){
			return obj;
		}
	
		target = target || (webix.isArray(obj)?[]:{});
		for (var method in obj){
			if(obj[method] && typeof obj[method] == "object" && !webix.isDate(obj[method])){
				target[method] = copy(obj[method], (webix.isArray(obj[method])?[]:{}), config);
			} else {
				target[method] = obj[method];
			}
		}

		return target;
	}

	function render_sub_stack(scope, path){
		if (scope.root)
			scope.root = webix.$$(scope.root);

		var parts = parse_parts(path);
		scope.path = [].concat(parts);
		render_stack(scope, parts);
	}

	function render_stack(layout, stack){
		var line = stack[0];
		if (line){
			var url = line.page;
			var issubpage = url.indexOf(".") === 0;

			if (issubpage)
				url = (layout.fullname||"")+url;
			url = url.replace(/\./g,"/");

			if (run_plugins(require_plugins, url, line, stack, layout) === false) return;

			require(["views/" + url], function(ui){
				stack.shift();

				var next = layout.sub(ui, line, stack);
				if (next){
					next.fullname = (issubpage ? (layout.fullname || "") : "") + line.page;
					render_stack(next, stack);
				} else {
					webix.ui.$freeze = false;
					webix.ui.resize();
				}
			});
		} else {
			webix.ui.$freeze = false;
			webix.ui.resize();
		}
	}

	var ui_plugins = [];
	var url_plugins = [];
	var require_plugins = [];
	function run_plugins(plugins, ui, name, stack, scope){
		for (var i = 0; i < plugins.length; i++)
			if (plugins[i](ui, name, stack, scope) === false) return false;
		return true;
	}

	var app = {
		create:function(config){
			//init config
			app.config = webix.extend({
				name:"App",
				version:"1.0",
				container: document.body,
				start:"/home"
			}, config, true);

			//init self
			app.debug = config.debug;
			app.$layout = {
				sub:subui,
				root: app.config.container,
				index:0,
				add:true
			};
			webix.extend(app, webix.EventSystem);

			//show start page
			setTimeout(function(){
				webix.ready(function(){
					app.start();
				});
			},1);

			
			
			var node = app.config.container;
			webix.html.addCss(node, "webixappstart");
			setTimeout(function(){
				webix.html.removeCss(node, "webixappstart");
				webix.html.addCss(node, "webixapp");
			}, 10);

			return app;
		},

		ui:create_temp_ui,


		//navigation
		router:function(name){
			var parts = parse_parts(name);
			app.path = [].concat(parts);

			//webix.ui.$freeze = true;
			render_stack(app.$layout, parts);
		},
		show:function(name, options){
			routie.navigate("!"+name, options);
		},
		start:function(name){
			//init routing
			routie("!*",		app.router);

			if (!window.location.hash)
				app.show(app.config.start);
			 else {
				webix.ui.$freeze = false;
				webix.ui.resize();
 			}
 		},


		//plugins
		use:function(handler, config){
			if (handler.$oninit)
				handler.$oninit(this, (config || {}) );

			if (handler.$onurlchange)
				url_plugins.push(handler.$onurlchange);
			if (handler.$onurl)
				require_plugins.push(handler.$onurl);
			if (handler.$onui)
				ui_plugins.push(handler.$onui);
		},


		//event helpers
		trigger:function(name){
			app.apply(name, [].splice.call(arguments, 1));
		},
		apply:function(name, data){
			app.callEvent(name, data);
		},
		action:function(name){
			return function(){
				app.apply(name, arguments);
			};
		},
		on:function(name, handler){
			this.attachEvent(name, handler);
		},

		_uis:[],
		_handlers:[]
	};

	function create_temp_event(obj, name, code){
		var id = obj.attachEvent(name, code);
		this._handlers.push({ obj:obj, id:id });
		return id;
	}

	function create_temp_ui(module, container){
		var view;
		var temp = { _init:[], _destroy:[] };
		var ui = copy(module, null, temp);
			ui.$scope = this;

		if (ui.id)
			view = $$(ui.id);
			
		if (!view){
			view = webix.ui(ui, container);
			this._uis.push(view);
			run_handlers(temp._init, view, this);
		}

		return view;
	}

	function run_handlers(arr, view, scope){
		if (arr)
			for (var i = 0; i < arr.length; i++)
				arr[i](view, scope);
	}

	function destroy(){
		if (!this._ui) return;

		if (this.$layout)
			destroy.call(this.$layout);

		var handlers = this._handlers;
		for (var i = handlers.length - 1; i >= 0; i--)
			handlers[i].obj.detachEvent( handlers[i].id );
		this._handlers = [];

		var uis = this._uis;
		for (var i = uis.length - 1; i >= 0; i--)
			if (uis[i] && uis[i].destructor) uis[i].destructor();
		this._uis = [];

		run_handlers(this._destroy, this._ui, this);

		if (!this.parent && this._ui)
			this._ui.destructor();
	}


	function delete_ids(view){
		delete webix.ui.views[view.config.id];
		view.config.id = "";
		var childs = view.getChildViews();
		for (var i = childs.length - 1; i >= 0; i--)
			delete_ids(childs[i]);
	}
	function create(subview){
		this._uis=[];
		this._handlers=[];

		//naive solution for id dupplication
		if (this.root && this.root.config)
			delete_ids(this.root);

		this._ui = webix.ui(subview, this.root);
		if (this.parent)
			this.root = this._ui;

		run_handlers(this._init, this._ui, this);
	}

	function invalid_url(err){
		if (app.debug)
			console.log(err.stack);

		if (!err.requireModules) throw(err);
		if (app.debug)
			webix.message({ type:"error", expire:5000, text:"Can't load "+err.requireModules.join(", ") });

		app.show(app.config.start);
	}

	requirejs.onError = invalid_url;
	return app;
});