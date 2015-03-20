define(function(){

var row1 = { type:"clean", rows:[{               
    type:"clean", margin:20, cols:[
      {view: "button", label: "Ordinary Raised", css: "button_raised", align: "left"},
      {view: "button", label: "Primary Raised", css: "button_primary button_raised", align: "left"},
      {view: "button", label: "Info Raised", css: "button_info button_raised", align: "left"},
      {view: "button", label: "Success Raised", css: "button_success button_raised", align: "right"}
    ]
  },
  {
    type:"clean", cols:[
      {template: 'css: "button_raised"'},
      {template: 'css: "button_primary button_raised"'},
      {template: 'css: "button_info button_raised"'},
      {template: 'css: "button_success button_raised"'}
    ]
  }
]};

var row2 = { type:"clean", rows:[{               
    type:"clean", margin:20, cols:[
      {view: "button", label: "Warning Raised", css: "button_warning button_raised", align: "right"},
      {view: "button", label: "Danger Raised", css: "button_danger button_raised", align: "right"},
      {view: "button", label: "Badged", css: "button_danger button_raised", align: "left", badge:4 },
      {}
    ]
  },
  {
    type:"clean", cols:[
      {template: 'css: "button_warning button_raised"'},
      {template: 'css: "button_danger button_raised"'},
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