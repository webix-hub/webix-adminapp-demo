const layout = {

	type: "clean",
	rows:[
		{
			view: "toolbar",
			css: "highlighted_header header1",
			paddingX:5,
			paddingY:5,
			height:40,
			cols:[
				{
					"template": "<span class='webix_icon fa-male'></span>User", "css": "sub_title2", borderless:true
				},
				{
					view: "button", label: "Close", width: 80
				}
			]
		},
		{
			view: "form",
			id: "userForm",
			elementsConfig:{
				labelWidth: 120
			},
			elements:[
				{view: "text", label: "First Name",name: "name1"},
				{view: "text", label: "Last Name", name: "name2"},
				{view: "datepicker", label: "Date of Birth", name: "date"},
			
				{view: "text", label: "Phone Number"},
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

export default layout;