define(function(){

var row1 = {
  cols:[
    {template: 'Default text'},
    {template: 'css: "webix_text_primary"', css: 'webix_text_primary'},
    {template: 'css: "webix_text_info"', css: 'webix_text_info'},
    {template: 'css: "webix_text_success"', css: 'webix_text_success'}
  ]
};

var row2 = {
  cols:[
    {template: 'css: "webix_text_warning"', css: 'webix_text_warning'},
    {template: 'css: "webix_text_danger"', css: 'webix_text_danger'},
    {template: 'css: "webix_text_muted"', css: 'webix_text_muted'},
    {}
  ]
};

var ui = {
  type: "line",
  height: 150,
  borderless: true,
  css: "webix_layout_shadowed",
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