define(["models/files","views/webix/editable","views/webix/filetree"], function(files){

	var tree = {
		id: "fileTree",
		view: "edittree",
		editable:true,
		editor:"text",
		editaction: "",
		editValue:"value",
		select: true,
		drag: true,
		data: files.folders,
		type: "fileTree",
		on:{
			onAfterSelect: function(id){
				var value = this.getItem(id).value;
				$$("filesView").filter("#pId#",id);
				var folders = [];
				while(id){
					folders.push(this.getItem(id).value+"/");
					id = this.getParentId(id);
				}
				folders.reverse();
				$$("path").setValue(folders.join(""));
			}
		}
	};


	return {
		$ui:tree
	};


});