define(function(){

var row1 = { type:"clean", rows:[{               
    type:"clean", margin:20, cols:[
      {view: "button", label: "Ordinary", align: "left"},
      {view: "button", label: "Disabled", align: "left", disabled: true},
      {view: "button", label: "Primary", css: "button_primary", align: "left"},
      {view: "button", label: "Info", css: "button_info", align: "left"}
    ]
  },
  {
    type:"clean", cols:[
      {template: "Default", css:"center"},
      {template: "disabled: true", css:"center"},
      {template: 'css: "button_primary"', css:"center"},
      {template: 'css: "button_info"', css:"center"}
    ]
  }
]};

var row2 = { type:"clean", rows:[{               
    type:"clean", margin:20, cols:[
      {view: "button", label: "Success", css: "button_success", align: "left"},
      {view: "button", label: "Warning", css: "button_warning", align: "left"},
      {view: "button", label: "Danger", css: "button_danger", align: "left"},
      {view: "button", label: "Transparent", css: "bg_primary button_transparent", align: "left"}
    ]
  },
  {
    type:"clean", cols:[
      {template: 'css: "button_success"', css:"center"},
      {template: 'css: "button_warning"', css:"center"},
      {template: 'css: "button_danger"', css:"center"},
      {template: 'css: "button_transparent"', css:"center"}
    ]
  }
]};

var ui = {
  height: 300,
  borderless: true,
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