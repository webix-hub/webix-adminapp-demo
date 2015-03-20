define(function(){

var row1 = {
  cols:[
    {template: 'Default backround'},
    {template: 'css: "bg_primary"', css: 'bg_primary'},
    {template: 'css: "bg_info"', css: 'bg_info'}
  ]
};

var row2 = {
  cols:[
    {template: 'css: "bg_success"', css: 'bg_success'},
    {template: 'css: "bg_warning"', css: 'bg_warning'},
    {template: 'css: "bg_danger"', css: 'bg_danger'}
  ]
};

var ui = {
  height: 200,
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