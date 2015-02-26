define([
],function(){

	var layout = {
    type: "space",
		rows:[
      {
        type: "wide",
        rows:[          
          {
            type: "line",
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

          {
            type: "line",
            height: 150,
            rows: [
              {type: "line",
                rows: [
                  {
                    view: "template",
                    template: "Text Colors",
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
                          {template: 'css: "webix_text_primary"', css: 'webix_text_primary'},
                          {template: 'css: "webix_text_info"', css: 'webix_text_info'},
                          {template: 'css: "webix_text_success"', css: 'webix_text_success'},
                          {template: 'css: "webix_text_warning"', css: 'webix_text_warning'},
                          {template: 'css: "webix_text_danger"', css: 'webix_text_danger'},
                          {template: 'css: "webix_text_muted"', css: 'webix_text_muted'}
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },

          {
            type: "line",
            height: 150,
            rows: [
              {type: "line",
                rows: [
                  {
                    view: "template",
                    template: "Backrounds",
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
                          {template: 'Default backround'},
                          {template: 'css: "webix_bg_primary"', css: 'webix_bg_primary'},
                          {template: 'css: "webix_bg_info"', css: 'webix_bg_info'},
                          {template: 'css: "webix_bg_success"', css: 'webix_bg_success'},
                          {template: 'css: "webix_bg_warning"', css: 'webix_bg_warning'},
                          {template: 'css: "webix_bg_danger"', css: 'webix_bg_danger'}
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          
          {
            type: "line",
            height: 200,
            rows: [
              {type: "line",
                rows: [
                  {
                    view: "template",
                    template: "Flat Buttons (default look)",
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
                          {view: "button", label: "Ordinary", type: "form", align: "left"},
                          {view: "button", label: "Disabled", type: "form", align: "left", disabled: true},
                          {view: "button", label: "Primary", css: "webix_button_primary", type: "form", align: "left"},
                          {view: "button", label: "Info", css: "webix_button_info", type: "form", align: "left"},
                          {view: "button", label: "Success", css: "webix_button_success", type: "form", align: "left"},
                          {view: "button", label: "Warning", css: "webix_button_warning", type: "form", align: "left"},
                          {view: "button", label: "Danger", css: "webix_button_danger", type: "form", align: "left"},
                          {view: "button", label: "Transparent", css: "webix_bg_primary webix_button_transparent", type: "form", align: "left"}
                        ]
                      },
                      {
                        cols:[
                          {template: "Default"},
                          {template: "disabled: true"},
                          {template: 'css: "webix_button_primary"'},
                          {template: 'css: "webix_button_info"'},
                          {template: 'css: "webix_button_success"'},
                          {template: 'css: "webix_button_warning"'},
                          {template: 'css: "webix_button_danger"'},
                          {template: 'css: "webix_button_transparent"'}
                        ]
                      }

                    ]
                  }
                ]
              }
            ]
          },

          {
            type: "line",
            height: 200,
            rows: [
              {type: "line",
                rows: [
                  {
                    view: "template",
                    template: "Raised Buttons",
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
                          {view: "button", label: "Ordinary Raised", css: "webix_button_raised", type: "form", align: "left"},
                          {view: "button", label: "Primary Raised", css: "webix_button_primary webix_button_raised", type: "form", align: "left"},
                          {view: "button", label: "Info Raised", css: "webix_button_info webix_button_raised", type: "form", align: "left"},
                          {view: "button", label: "Success Raised", css: "webix_button_success webix_button_raised", type: "form", align: "right"},
                          {view: "button", label: "Warning Raised", css: "webix_button_warning webix_button_raised", type: "form", align: "right"},
                          {view: "button", label: "Danger Raised", css: "webix_button_danger webix_button_raised", type: "form", align: "right"}
                        ]
                      },
                      {
                        cols:[
                          {template: 'css: "webix_button_raised"'},
                          {template: 'css: "webix_button_primary webix_button_raised"'},
                          {template: 'css: "webix_button_info webix_button_raised"'},
                          {template: 'css: "webix_button_success webix_button_raised"'},
                          {template: 'css: "webix_button_warning webix_button_raised"'},
                          {template: 'css: "webix_button_danger webix_button_raised"'}
                        ]
                      }

                    ]
                  }
                ]
              }
            ]
          },

          {
            type: "line",
            height: 200,
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
                          {css: "webix_remove_icon", header:"<span class='webix_icon fa-times'></span>", template:"<span class='webix_icon fa-times' style='cursor:pointer;'></span>Remove Icon"}
                        ]
                      },
                      {
                        cols:[
                          {template: 'css: "webix_add_icon"'},
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
      }]
	};

	return { $ui:layout };

});
