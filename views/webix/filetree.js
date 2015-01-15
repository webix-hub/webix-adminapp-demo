webix.type(webix.ui.tree, {
	name:"fileTree",
	css: "file",
	height: 40,
	templateCommon:webix.template("{common.icon()} <div class='folder_title'>{common.folder()} #value#</div>"),
	folder:function(obj, common){
		return "<span class='webix_icon icon fa-folder"+(obj.open?"-open":(obj.$level>3?"-o":""))+"'></span>";
	}
});