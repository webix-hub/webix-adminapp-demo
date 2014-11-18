define([],function(){
	var layout = {
		type: "clean",
		rows:[
			{
				view: "toolbar",
				css: "highlighted_header header3",
				paddingX:5,
				paddingY:5,
				height:40,
				cols:[
					{
						"template": "<span class='webix_icon fa-paint-brush'></span>Style", "css": "sub_title2", borderless:true
					}
				]
			},
			{
				view: "form",
				elementsConfig:{
					labelWidth: 100
				},
				elements:[
					{ view: "combo", label: "Font Family", value: "Arial", options:["Arial", "Tahoma", "Verdana"]},
					{ view:"radio", name:"size", label:"Icon Size", value:"Small", vertical:true, options:["Small", "Medium", "Large", "Extra Large"] },
					{ view: "colorpicker", label: "Background", value: "#a693eb"},
					{ view: "colorpicker", label: "Font Color", value: "#a4b4bf"},
					{ view: "colorpicker", label: "Border Color", value: "#7565ad"},
					{
						margin: 10,
						paddingX: 2,
						borderless: true,
						cols:[
							{},
							{view: "button", label: "Reset",  align: "right"},
							{view: "button", label: "Save", type: "form", align: "right"}
						]
					}

				]

			}
		]
	};

	return { $ui: layout };

});
