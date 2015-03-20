define([],function(){
	var layout = {

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
						view: "button", css: "button_transparent", label: "Close", width: 80
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
					{view: "text", placeholder: "Type here...", label: "First Name",name: "name1"},
					{view: "text", placeholder: "Type here...", label: "Last Name", name: "name2"},
					{view: "datepicker", placeholder: "Select here...", label: "Date of Birth", name: "date"},
				
					{view: "text", placeholder: "Type here...", label: "Phone Number"},
					{
						margin: 10,
						paddingX: 2,
						borderless: true,
						cols:[
              {view: "button", css: "button_danger", label: "Delete", type: "form", align: "left"},
							{},
							{view: "button", css: "", label: "Reset",  align: "right"},
              {view: "button", css: "button_primary button_raised", label: "Save", type: "form", align: "right"}
						]
					}

				]

			}
		]
	};

	return { $ui: layout };

});
