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

			{ id:'editor', view:"ckeditor", value:"", editor:{language: 'en'}, minHeight: 250},
			{
				view: "button", value: "Add new product", type: "form",inputWidth: 150
			},{

			}
		]
	};

	var layout = {
		maxWidth: 500,

		rows:[
			{
				view: "toolbar",
				paddingX:5,
				paddingY:5,
				height:40,	css: "highlighted_header header2", elements:[
					{"template": "<span class='webix_icon fa-list-alt'></span>Product form", borderless: true,"css": "sub_title2"}
				]

			},
			form
		]
	};

	return {
		$ui:layout
	};
	

});