import {JetView} from "webix-jet";

import {data} 	from "models/products";

export default class ProductsView extends JetView {
	config(){
		return layout;
	}
	init(view){
		view.queryView({ view:"datatable" }).parse(data);
	}
}

const grid = {
	id:"productsData",
	view:"datatable", select:true, editable:true, editaction:"dblclick",
	columns:[
		{id:"id", header:"#", width:50},
		{id:"code", header:["Code", {content:"textFilter"} ], sort:"string", minWidth:80, fillspace: 1},
		{id:"name", header:["Name", {content:"textFilter"} ], sort:"string", minWidth:120, fillspace: 2, editor:"text"},
		{id:"categoryName", header:["Category", {content:"selectFilter"} ], sort:"string", minWidth:120, fillspace: 2, editor:"text",  template:"<div class='category#category#'>#categoryName#</div>"},
		{id:"price", header:["Price"], sort:"int", minWidth:80, fillspace: 1, format:webix.i18n.priceFormat},
		{id:"quantity", header:["Quantity" ], sort:"int", minWidth:60, fillspace: 1},
		{id:"statusName", header:["Status"], minWidth:75, sort:"string", fillspace: 1, template:"<span class='status status#status#'>#statusName#</span>"},

		{id:"edit", header:"&nbsp;", width:35, template:"<span  style=' cursor:pointer;' class='webix_icon fa-pencil'></span>"},
		{id:"delete", header:"&nbsp;", width:35, template:"<span  style='cursor:pointer;' class='webix_icon fa-trash-o'></span>"}
	],
	pager:"pagerA",
	"export":true,
	onClick:{
		"fa-trash-o":function(e,id){
			webix.confirm({
				text:"The product will be deleted. <br/> Are you sure?", ok:"Yes", cancel:"Cancel",
				callback:(res) => {
					if(res){
						const item = this.getItem(id);
						item.status = "0";
						item.statusName = "Deleted";
						this.refresh(id);
					}
				}
			});
		}
	},
	ready:function(){
		webix.extend(this, webix.ProgressBar);
	}
};

const controls = [
	{view: "button", type: "iconButton", icon:"file-excel-o",width:150, label: "Export To Excel", click: function(){
		webix.toExcel(webix.$$("productsData"));
	}},
	{view: "button", type: "iconButton", icon:"refresh", width:100, label: "Refresh", click: function(){
		var grid = webix.$$("productsData");
		grid.clearAll();
		grid.showProgress();
		webix.delay(function(){
			grid.parse(data);
			grid.hideProgress();
		}, null, null, 300);
		
	}},
	{},
	{ view:"richselect", id:"order_filter", value: "all", maxWidth: 300, minWidth: 250, vertical: true, labelWidth: 110, options:[
		{id:"all", value:"All"},
		{id:"1", value:"Published"},
		{id:"2", value:"Not published"},
		{id:"0", value:"Deleted"}
	],  label:"Filter products", on:{
		onChange:function(){
			var val = this.getValue();
			if(val=="all")
				webix.$$("productsData").filter("#status#","");
			else
				webix.$$("productsData").filter("#status#",val);
		}
	}
	}
];

const toolbar = {
	view: "toolbar",
	css: "highlighted_header header6",
	paddingX:5, paddingY:5, height:40,
	cols:[{
		view:"pager", id:"pagerA",
		template:"{common.first()}{common.prev()}&nbsp; {common.pages()}&nbsp; {common.next()}{common.last()}",
		autosize:true, 
		height: 35, group:5
	}]
};

const layout = {
	type: "space",
	rows:[
		{ height:40, cols: controls	},
		{ rows:[ grid, toolbar ] }
	]
};
