define(["views/webix/ckeditor"], function(){

	var form = {
		view: "form",
		elementsConfig:{
			labelWidth: 120
		},
		elements:[
			{view: "text", label: "Code"},
			{view: "text", label: "Name"},
			{view: "text", label: "Price"},
			{view: "checkbox", label: "In Store",value: 1},
			{view: "label", label: "Description", height:30},

			{ id:'editor', view:"ckeditor", value:"", minHeight: 300},
			{
				view: "button", value: "Add new product", type: "form",inputWidth: 150
			},{

			}
		]
	};

	var layout = {
		rows:[
			{
				"template": "<span class='webix_icon fa-list-alt'></span>Product form", "css": "sub_title", "height": 50
			},
			form
		]
	};

	return {
		$ui:layout
	};
	

});