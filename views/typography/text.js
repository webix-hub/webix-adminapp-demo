define(function(){

var row1 = {
  cols:[
    {template: 'Default text'},
    {template: 'css: "text_primary"', css: 'text_primary'},
    {template: 'css: "text_info"', css: 'text_info'},
    {template: 'css: "text_success"', css: 'text_success'}
  ]
};

var row2 = {
  cols:[
    {template: 'css: "text_warning"', css: 'text_warning'},
    {template: 'css: "text_danger"', css: 'text_danger'},
    {template: 'css: "text_muted"', css: 'text_muted'},
    {}
  ]
};

var ui = {
  height: 150,
  rows: [
    {type: "line",
      rows: [
        {
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