const layout = {
	type: "clean",
	rows:[
		{
			view: "toolbar",
			css: "highlighted_header header4",
			paddingX:5,
			paddingY:5,
			height:40,
			cols:[
				{
					"template": "<span class='webix_icon fa-paint-brush'></span>Style", "css": "sub_title2", borderless:true
				},
				{view: "segmented", options:["Header","Content","Buttons"],width: 210}
			]
		},
		{
			view: "form",
			elementsConfig:{
				labelWidth: 100,
				labelPosition: "top"
			},
			elements:[
				{ view: "combo", label: "Font Family", value: "Arial", options:["Arial", "Tahoma", "Verdana"]},
				{ view:"radio", name:"fontWeigth", label:"Font Weigth", value:"400",  options:["400", "500", "700"] },
				{ view: "colorpicker", label: "Background", value: "#a693eb"},
				{ view: "colorpicker", label: "Font Color", value: "#a4b4bf"},

				{ view: "text", label: "Font Size (px)", value: "14"},
				{
					margin: 10,
					paddingX: 2,
					borderless: true,
					cols:[
						{},
						{view: "button", type: "iconButton", icon:"angle-left", label: "Back",  align: "right", width: 90},
						{view: "button", type:"form", label: "Done",  align: "right", width: 90}
					]
				}

			]

		}
	]
};

export default layout;