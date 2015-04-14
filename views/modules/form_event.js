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
						"template": "<span class='webix_icon fa-star-o'></span>Event", "css": "sub_title2", borderless:true
					},
					{
						view: "button", css: "button_transparent", label: "Close", width: 80
					}
				]
			},
			{
				view: "form",
				elementsConfig:{
					labelWidth: 100
				},
				elements:[
					{view: "text", placeholder: "Type here...", label: "Event Name"},
					{view: "datepicker", label: "Start Date", value: new Date(), timepicker:true, format: "%H:%i %D, %d %M"},
					{view: "datepicker", label: "End Date", value: webix.Date.add(new Date(),1,"hour"), format: "%H:%i %D, %d %M", timepicker:true},
					{view: "checkbox", label: "All-day"},
					{view: "richselect", label: "Calendar", value:"1", options:[
						{id:1, value: "My Calendar"},
						{id:2, value: "Webix project"},
						{id:3, value: "Other"}
					]},
					{view: "textarea", placeholder: "Type here...", label: "Details", height: 80},
					{
						margin: 10,
						paddingX: 2,
						borderless: true,
						cols:[
              				{view: "button", css: "button_warning button_raised", label: "Warning", type: "form", align: "left"},
							{},
							{view: "button", label: "Reset",  align: "right"},
							{view: "button", css: "button_success button_raised", label: "Save", align: "right"}
						]
					}

				]

			}
		]
	};

	return { $ui: layout };

});
