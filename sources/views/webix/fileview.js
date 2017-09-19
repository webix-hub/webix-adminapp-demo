webix.type(webix.ui.dataview, {
	name:"fileView",
	css: "files",
	height: 80,
	width: 150,

	template: function(obj){
		var icon = (obj.icon||"folder-o");
		return "<div class='"+(obj.type||"folder")+"'><span class='webix_icon fa-"+icon+"'></span></div>"+obj.value;
	}

});