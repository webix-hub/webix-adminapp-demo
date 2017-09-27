const ui = {
	view: "form",
	id: "metaView",
	elementsConfig:{
		labelWidth: 130
	},
	elements:[
		{view: "text", name: "meta_title", label: "Title"},
		{view: "textarea", label: "Meta Keywords",gravity:1,minHeight:80},
		{view: "textarea", label: "Meta Description",gravity:1.5,minHeight:80},
		{}
	]
};

export default ui;