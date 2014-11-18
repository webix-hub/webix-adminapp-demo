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
						"template": "<span class='webix_icon fa-male'></span>User", "css": "sub_title2", borderless:true
					}
				]
			},
			{
				view: "form",
				id: "userForm",
				elementsConfig:{
					labelWidth: 100
				},
				elements:[
					{view: "text", label: "First Name",name: "name1"},
					{view: "text", label: "Last Name", name: "name2"},
					{view: "datepicker", label: "Date of Birth", name: "date"},
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
