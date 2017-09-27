const layout = {

	"type": "clean",
	"rows":[
		{
			view: "toolbar",
			css: "highlighted_header header2",
			paddingX:5,
			paddingY:5,
			height:40,
			cols:[
				{
					"template": "<span class='webix_icon fa-sliders'></span>Project", "css": "sub_title2", borderless: true
				},
				{
					view: "richselect", value:"Webix", options: ["Webix", "Kanban", "Pivot"], width: 105
				}
			]

		},
		{
			view: "form",
			id: "projectForm",
			elementsConfig:{
				labelWidth: 100
			},
			elements:[

				{ view:"slider", css: "slider3", label:"Task 1", value:"80",step:1, name:"s1", title: webix.template("#value#%")},
				{ view:"slider", css: "slider2", label:"Task 2", value:"20", step:1, name:"s2", title: webix.template("#value#%")},
				{ view:"slider", css: "slider1", label:"Task 3", value:"60", step:1, name:"s3", title: webix.template("#value#%")},
				{
					margin: 10,
					paddingX: 2,
					borderless: true,
					cols:[
						{},
						{view: "button", label: "Next", type: "form", align: "right",width: 80}
					]
				}
			]
		}
	]
};

export default layout;