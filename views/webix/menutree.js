// Type for left menu
webix.type(webix.ui.tree, {
	name:"menuTree",
	height: 40,
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