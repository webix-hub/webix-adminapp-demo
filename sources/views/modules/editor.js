import "views/webix/ckeditor";

const form = {
	view: "form",
	id: "mainView",
	elementsConfig:{

		labelWidth: 130
	},
	scroll: true,
	elements:[
		{view: "text", name: "code", label: "Code"},
		{view: "text", name: "name", label: "Name"},
		{view: "text", name: "price", label: "Price"},
		{view: "richselect", name: "category", label:"Category", vertical: true, options:[
			{id:2, value: "Home furniture"},
			{id:3, value: "Office furniture"},
			{id:1, value: "Wood furniture"}
		]},
		{view:"richselect", name:"status", value: "all",label: "Status", options:[
			{id:"1", value:"Published"},
			{id:"2", value:"Not published"},
			{id:"0", value:"Deleted"}
		]},
		{view: "checkbox", name: "in_stock", label: "In stock",value: 1},
		{ view: "label", label: "Full description", height:30},
		{ id:"editor", view:"textarea", value:"", editor:{language: "en"}, minHeight: 200},

		{}
	]
};

export default form;