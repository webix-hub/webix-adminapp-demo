define([
  "views/typography/buttons",
  "views/typography/raised",
  "views/typography/text",
  "views/typography/background"
],function(buttons, raised, text, background){

	var layout = {
    type: "space",
		rows:[
          {
            type: "line",
            borderless: true,
            css: "webix_layout_shadowed",
            rows: [
              {type: "line",
                rows: [
                  {
                    view: "template",
                    template: "Main Typography",
                    type: "header"
                  },
                  {
                    view: "form",
                    elementsConfig:{
                      labelWidth: 100,
                      margin: 10,
                      paddingX: 2,
                      borderless: true
                    },
                    elements:[
                      {               
                        cols:[
                          {template: 'Default text'},
                          {template: 'Header Text', type: "header"},
                          {template: '<a>Link</a>'}
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },

          text,
          background,
          buttons,
          raised,

          {
            type: "line",
            height: 150,
            borderless: true,
            css: "webix_layout_shadowed",
            width: "100%",
            rows: [
              {type: "line",
                rows: [
                  {
                    view: "template",
                    template: "Icon Styles",
                    type: "header"
                  },
                  {
                    view: "form",
                    elementsConfig:{
                      labelWidth: 100,
                      margin: 10,
                      paddingX: 2,
                      borderless: true
                    },
                    elements:[
                      {               
                        cols:[
                          {css: "webix_add_icon", header:"<span class='webix_icon fa-plus-circle'></span>", template:"<span class='webix_icon fa-plus-circle' style='cursor:pointer;'></span>Add Icon"},
                          {css: "webix_edit_icon", header:"<span class='webix_icon fa-edit'></span>", template:"<span class='webix_icon fa-edit' style='cursor:pointer;'></span>Edit Icon"},
                          {css: "webix_remove_icon", header:"<span class='webix_icon fa-times'></span>", template:"<span class='webix_icon fa-times' style='cursor:pointer;'></span>Remove Icon"}
                        ]
                      },
                      {
                        cols:[
                          {template: 'css: "webix_add_icon"'},
                          {template: 'css: "webix_edit_icon"'},
                          {template: 'css: "webix_remove_icon"'}
                        ]
                      }

                    ]
                  }
                ]
              }
            ]
          }
          
        ]
	};

	return { $ui:layout };

});
