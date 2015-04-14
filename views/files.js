define(["models/files",	"views/modules/edittree","views/webix/fileview"], function(files,tree){
	var layout = {
		type:"clean", margin:-8,
		rows:[
			{ type:"material", rows:[{
				view: "form",
				padding:10,
				cols:[
					{view: "button", type: "icon", icon: "folder-o", label: "New folder", width: 140, click: function(){
						$$("fileTree").add( {value:"New folder"}, 0, $$("fileTree").getSelectedId());
					}},

					{view: "button", type: "icon", icon: "pencil-square-o", label: "Rename", width: 120, click:function(){
						$$("fileTree").edit($$("fileTree").getSelectedId());
					}},
					{view: "button", type: "icon", icon: "refresh", label: "Refresh", width: 125},
					{view: "button", type: "icon", icon: "times", label: "Delete", width: 115},
					{},

					{view: "button", css:"upload_icon", type: "icon", icon: "plus", label: "Upload", width: 120, click: function(){
						$$("fileUploadAPI").fileDialog({});
					}}
				]
			}]},
			{
				type: "material",
				cols:[{
					width: 250, 
					rows:[
						tree,
						{
							view: "form",
							css: "highlighted_header header6",
							paddingX:5,
							paddingY:5,
							height:40,

							elements:[
							  {view: "text", label: "Path:", labelAlign: "right", labelWidth: 60, id: "path"}
							]
						}
					]
				},
				{ view: "resizer"},
				{ 
					rows: [
					{ view: "dataview", edit: true, select: true, id: "filesView", type: "fileView", drag: true,
					  onDblClick: {
						webix_dataview_item: function(e,id){
						  if($$("fileTree").exists(id))
							$$("fileTree").select(id);
						}
					  }
					}
				  ]
				}]
			}
		]
	};

	return {
		$ui: layout,
		$oninit:function(){
			$$("filesView").parse(files.files);
			$$("fileTree").select("files");

			webix.ui({
				id:"fileUploadAPI",
				view:"uploader",
				upload:	"server/upload.php",
				on:{
					onFileUploadError: function(item){
						webix.alert("Error during file upload");
					}
				},
				apiOnly:true
			});


			$$("filesView").attachEvent("onDestruct", function(){
				$$("fileUploadAPI").destructor();
			});

		}
	}
});