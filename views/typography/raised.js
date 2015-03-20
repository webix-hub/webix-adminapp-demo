define(function(){

var row1 = { type:"clean", rows:[{               
    type:"clean", margin:20, cols:[
      {view: "button", label: "Ordinary Raised", css: "webix_button_raised", align: "left"},
      {view: "button", label: "Primary Raised", css: "webix_button_primary webix_button_raised", align: "left"},
      {view: "button", label: "Info Raised", css: "webix_button_info webix_button_raised", align: "left"},
      {view: "button", label: "Success Raised", css: "webix_button_success webix_button_raised", align: "right"}
    ]
  },
  {
    type:"clean", cols:[
      {template: 'css: "webix_button_raised"'},
      {template: 'css: "webix_button_primary webix_button_raised"'},
      {template: 'css: "webix_button_info webix_button_raised"'},
      {template: 'css: "webix_button_success webix_button_raised"'}
    ]
  }
]};

var row2 = { type:"clean", rows:[{               
    type:"clean", margin:20, cols:[
      {view: "button", label: "Warning Raised", css: "webix_button_warning webix_button_raised", align: "right"},
      {view: "button", label: "Danger Raised", css: "webix_button_danger webix_button_raised", align: "right"},
      {view: "button", label: "Badged", css: "webix_button_danger webix_button_raised", align: "left", badge:4 },
      {}
    ]
  },
  {
    type:"clean", cols:[
      {template: 'css: "webix_button_warning webix_button_raised"'},
      {template: 'css: "webix_button_danger webix_button_raised"'},
      {template: 'Button with badge'},
      {}
    ]
  }
]};

var ui = {
  height: 300,
  rows: [
    {
      template: "Raised Buttons",
      type: "header"
    },
    {
      view: "form",
      type:"clean",
      padding:20,
      elements: [
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