define([
	"views/modules/editor",
	"views/modules/topsales",
	"models/products"
], function(editor, topsales, products){

var form = {
	view: "form",
	paddingX:5,
	paddingY:5,
	height:40,
	cols:[
		{
			"template": "<span class='webix_icon fa-table'></span>All products", "css": "sub_title2", borderless: true
		},
		{view: "button", type: "iconButton", icon:"file-excel-o",width:150, label: "Export To Excel", click: function(){$$("productsData").exportToExcel();}}
	]
};

var grid = {
	id:"productsData",
	view:"datatable", select:true, editable:true, editaction:"dblclick",
	columns:[
		{id:"id", header:"#", width:50},
		{id:"code", header:"Code", minWidth:100, fillspace: 1},
		{id:"name", header:"Name", minWidth:220, fillspace: 2, editor:"text"},

		{id:"price", header:"Price", minWidth:70, fillspace: 1, format:webix.i18n.priceFormat},
		{id:"trash", header:"&nbsp;", width:35, template:"<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"}
	],
	"export":true,
	data:products.getAll,
	onClick:{
		"webix_icon":function(e,id,node){
			webix.confirm({
				text:"Are you sure", ok:"Yes", cancel:"Cancel",
				callback:function(res){
					if(res){
						webix.$$("productsData").remove(id);
					}
				}
			});
		}
	}
};

var layout = {
	type: "space",
	rows:[
		{
			type: "wide",
			cols:[
				{
					type: "clean",
					rows:[
						form,
						grid
					]
				},
				{
					type: "wide",
					rows:[
						editor,
						topsales
					]
				}
			]
		}
	]
};


return { $ui:layout };

});