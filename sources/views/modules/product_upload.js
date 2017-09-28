const ui = {
	id:"imagesView",
	padding: 10,
	margin: 10,
	rows:[
		{
			cols:[
				{},
				{
					view:"button", type:"iconButton", icon: "plus-circle", label: "Add image record", width: 170
				}
			]
		},
		{
			view:"datatable",
			editable:true,
			columns:[
				{ id:"photo",	header:"Image",  template:"<span class='product_image webix_icon fa-#icon#'></span>", fillspace:1},
				{ id:"title",  editor:"text",	header:"Title",fillspace:1.7},
				{ id:"usage",  editor:"select",	options:["Main image", "Thumbnail"],	header:"Usage", fillspace:1.2},
				{ id:"upload",	header:"Upload" , template:"<div title='Click to upload' class='product_image_action'><span class='webix_icon fa-download'></span>Upload</div>", fillspace:1},
				{ id:"delete",	header:"Delete" , template:"<div title='Click to delete' class='product_image_action'><span class='webix_icon fa-times'></span>Delete</div>", fillspace:1}
			],
			autoheight:true,
			rowHeight:80,
			data: [
				{ id:1, title:"Product image 1", usage:"Main image", icon: "camera"},
				{ id:2, title:"Product image 2", usage:"Thumbnail", icon: "camera"}
			],
			on:{
				onAfterLoad: function(){
					webix.ui({
						id:"uploadAPI",
						view:"uploader",
						upload:	"server/upload.php",
						on:{
							onFileUploadError: function(){
								webix.alert("Error during file upload");
							}
						},
						apiOnly:true
					});
				},
				onItemClick:function(id){
					if (id.column == "upload")
						webix.$$("uploadAPI").fileDialog({ rowid : id.row });
				},
				onDestruct: function(){
					webix.$$("uploadAPI").destructor();
				}
			}
		},
		{}
	]

};

export default ui;