define(function(){

var row1 = {
  cols:[
    {template: 'Default backround'},
    {template: 'css: "webix_bg_primary"', css: 'webix_bg_primary'},
    {template: 'css: "webix_bg_info"', css: 'webix_bg_info'}
  ]
};

var row2 = {
  cols:[
    {template: 'css: "webix_bg_success"', css: 'webix_bg_success'},
    {template: 'css: "webix_bg_warning"', css: 'webix_bg_warning'},
    {template: 'css: "webix_bg_danger"', css: 'webix_bg_danger'}
  ]
};

var ui = {
  type: "line",
  height: 200,
  borderless: true,
  css: "webix_layout_shadowed",
  rows: [
    {type: "line",
      rows: [
        {
          template: "Backgrounds",
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
            row1,
            row2
          ]
        }
      ]
    }
  ]
};

return {
  $ui: ui
};

});