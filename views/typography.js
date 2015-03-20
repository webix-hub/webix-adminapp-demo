define([
  "views/typography/buttons",
  "views/typography/raised",
  "views/typography/text",
  "views/typography/background"
],function(buttons, raised, text, background){

	var layout = {
    type: "material",

		rows:[
      {
        rows:[
          {
            template: "Main Typography",
            type: "header"
          },
          {
            paddingX:25, paddingY:10, cols:[
              { view:"label", label: 'Default text'},
              { view:"label", label: 'Header Text', type: "header"},
              { view:"label", label: '<a>Link</a>'}
            ]
          }
        ]
      },

      text,
      background,
      buttons,
      raised,

      {
        height:150,
        rows:[
          {
            template: "Icon Styles",
            type: "header"
          },
          {
            paddingX:25, paddingY:10, type:"clean", borderless:true, cols:[
              {css: "solid_icon", template:"<span class='webix_icon fa-plus-circle' style='cursor:pointer;'></span>Add Icon"},
              {css: "action_icon", template:"<span class='webix_icon fa-edit' style='cursor:pointer;'></span>Edit Icon"},
              {css: "danger_icon", template:"<span class='webix_icon fa-times' style='cursor:pointer;'></span>Remove Icon"}
            ]
          },
          {
            paddingX:25, paddingY:10, type:"clean", borderless:true, cols:[
              { template: 'css: "solid_icon"'},
              { template: 'css: "action_icon"'},
              { template: 'css: "danger_icon"'}
            ]
          }
        ]
      },
      {
        height:150,
        rows:[
          {
            template: "Panels",
            type: "header"
          },
          {
            padding:20, margin:20, cols:[
              { view:"template", template: 'css:"bg_clean"', css:"bg_clean"},
              { view:"template", template: 'css:"bg_panel"', css:"bg_panel"},
              { view:"template", template: 'css:"bg_panel_raised"', css:"bg_panel_raised"}
            ]
          }
        ]
      },
    ]
	};

	return { $ui:layout };

});
