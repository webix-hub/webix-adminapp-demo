define(function(){

var row1 = { type:"clean", rows:[{               
    type:"clean", margin:20, cols:[
      {view: "button", label: "Ordinary", align: "left"},
      {view: "button", label: "Disabled", align: "left", disabled: true},
      {view: "button", label: "Primary", css: "webix_button_primary", align: "left"},
      {view: "button", label: "Info", css: "webix_button_info", align: "left"}
    ]
  },
  {
    type:"clean", cols:[
      {template: "Default", css:"center"},
      {template: "disabled: true", css:"center"},
      {template: 'css: "webix_button_primary"', css:"center"},
      {template: 'css: "webix_button_info"', css:"center"}
    ]
  }
]};

var row2 = { type:"clean", rows:[{               
    type:"clean", margin:20, cols:[
      {view: "button", label: "Success", css: "webix_button_success", align: "left"},
      {view: "button", label: "Warning", css: "webix_button_warning", align: "left"},
      {view: "button", label: "Danger", css: "webix_button_danger", align: "left"},
      {view: "button", label: "Transparent", css: "webix_bg_primary webix_button_transparent", align: "left"}
    ]
  },
  {
    type:"clean", cols:[
      {template: 'css: "webix_button_success"', css:"center"},
      {template: 'css: "webix_button_warning"', css:"center"},
      {template: 'css: "webix_button_danger"', css:"center"},
      {template: 'css: "webix_button_transparent"', css:"center"}
    ]
  }
]};

var ui = {
  height: 400,
  borderless: true,
  css: "webix_layout_shadowed",
  rows: [
    {
      view: "template",
      template: "Flat Buttons (default look)",
      type: "header"
    },
    {
      view: "form",
      type:"clean", 
      padding:20,
      rows:[
        row1,
        row2
      ]
    }
  ]
};

return {
  $ui: ui
};

});