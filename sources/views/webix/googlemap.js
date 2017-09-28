webix.protoUI({
	name:"google-map",
	$init:function(){
		this.$view.innerHTML = "<div class='webix_map_content' style='width:100%;height:100%'></div>";
		this._contentobj = this.$view.firstChild;

		this.map = null;
		this.$ready.push(this.render);
	},
	render:function(){
		if(typeof window.google=="undefined"||typeof window.google.maps=="undefined"){
			var name = "webix_callback_"+webix.uid();
			window[name] = webix.bind(function(){
				this._initMap.call(this,true);
			},this);

			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "//maps.google.com/maps/api/js?sensor=false&callback="+name;
			document.getElementsByTagName("head")[0].appendChild(script);
		}
		else
			this._initMap();
	},
	_initMap:function(){
		var c = this.config;

		this.map = new window.google.maps.Map(this._contentobj, {
			zoom: c.zoom,
			center: new window.google.maps.LatLng(c.center[0], c.center[1]),
			mapTypeId: window.google.maps.MapTypeId[c.mapType]
		});
		webix._ldGMap = null;
	},
	center_setter:function(config){
		if(this.map)
			this.map.setCenter(new window.google.maps.LatLng(config[0], config[1]));
		
		return config;
	},
	mapType_setter:function(config){
		/*ROADMAP,SATELLITE,HYBRID,TERRAIN*/
		if(this.map)
			this.map.setMapTypeId(window.google.maps.MapTypeId[config]);

		return config;
	},
	zoom_setter:function(config){
		if(this.map)
			this.map.setZoom(config);

		return config;
	},
	defaults:{
		zoom: 5,
		center:[ 39.5, -98.5 ],
		mapType: "ROADMAP" 
	},
	$setSize:function(){
		webix.ui.view.prototype.$setSize.apply(this, arguments);
		if(this.map)
			window.google.maps.event.trigger(this.map, "resize");
	}
}, webix.ui.view);
