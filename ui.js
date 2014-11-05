// icon button with count marker
webix.protoUI({
	name:"icon",
	$skin:function(){
		this.defaults.height = webix.skin.$active.inputHeight;
	},
	defaults:{
		template:function(obj){
			var html = "<button style='height:100%;width:100%;line-height:"+obj.aheight+"px' class='webix_icon_button'>";
			html += "<span class='webix_icon fa-"+obj.icon+"'></span>";
			if(obj.value)
				html += "<span class='webix_icon_count'>"+obj.value+"</span>";
			html += "</button>";
			return html;
		},
		width:33
	},
	_set_inner_size:function(){

	}
}, webix.ui.button);

// Type for left menu
webix.type(webix.ui.tree, {
	name:"menuTree",
	height: 40,
	icon:function(obj, common){
		var html = "";
		/*var open = "";
		for (var i=1; i<=obj.$level; i++){
			if (i==obj.$level && obj.$count){
				var dir = obj.open?"down":"right";
				html+="<span class='"+open+" webix_icon fa-angle-"+dir+"'></span>";
			}
		}*/
		return html;
	},
	folder:function(obj, common){
		if(obj.icon)
			return "<span class='webix_icon icon fa-"+obj.icon+"'></span>";
		return "";
	}
});
webix.type(webix.ui.tree, {
	name:"menuTree2",
	height: 40,
	icon:function(obj, common){
		var html = "";
		var open = "";
		for (var i=1; i<=obj.$level; i++){
			if (i==obj.$level && obj.$count){
				var dir = obj.open?"down":"right";
				html+="<span class='"+open+" webix_icon fa-angle-"+dir+"'></span>";
		    }
		}
		return html;
	},
	folder:function(obj, common){
		if(obj.icon)
			return "<span class='webix_icon icon fa-"+obj.icon+"'></span>";
		return "";
	}
});