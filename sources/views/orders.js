import {JetView} from "webix-jet";

import orderform from "views/forms/order";
import exportwin from "views/menus/export";
import {data} from "models/orders";

export default class OrdersView extends JetView{
	config(){
		return layout;
	}
	init(view){
		view.queryView({ view:"datatable" }).parse(data);
		this._form = this.ui(orderform);
	}
}

const controls = [
	{ view: "button", type: "iconButton", icon: "plus", label: "Add order", width: 130, click: function(){
		this.$scope._form.show(this.$view);
	}},
	{ view: "button", type: "iconButton", icon: "external-link", label: "Export", width: 120, popup: exportwin },
	{},
	{view:"richselect", id:"order_filter", value: "all", maxWidth: 400, minWidth: 250, vertical: true, labelWidth: 100, options:[
		{id:"all", value:"All"},
		{id:"new", value:"Need Invoicing"},
		{id:"ready", value:"Ready to Ship"},
		{id:"completed", value:"Completed"},
		{id:"cancelled", value:"Cancelled"}
	],  label:"Filter orders", on:{
		onChange:function(){
			let val = this.getValue();
			if(val=="all")
				webix.$$("orderData").filter("#status#","");
			else
				webix.$$("orderData").filter("#status#", val);
		}
	}
	}
];

const grid = {
	margin:10,
	rows:[
		{
			id:"orderData",
			view:"datatable", select:true,
			columns:[
				{id:"id", header:"#", width:50},
				{id:"employee", header:["Employee", {content:"selectFilter"} ], sort:"string", minWidth:150, fillspace:1},
				{id:"customer", header:["Customer", {content:"selectFilter"} ], sort:"string", minWidth:150, fillspace:1},

				{id:"status", header:"Status", sort:"string", width:90},
				{id:"fee", header:"Fee", width:90, sort:"string", format:webix.i18n.priceFormat},
				{id:"taxes", header:"Taxes", width:90, sort:"string", format:webix.i18n.priceFormat},
				{id:"total", header:"Total", width:90, sort:"string", format:webix.i18n.priceFormat},
				{id:"shipping_company", header:"Shipping Company", sort:"string" },
				{id:"payment_method", header:"Payment method", width:130, sort:"string"},
				{id:"date", header:"Date", sort:"string", width:100},
				{id:"trash", header:"&nbsp;", width:35, template:"<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"}
			],
			"export": true,
			on: {
				onAfterLoad: function(){
					this.select(4);
				}
			},
			pager:"pagerA",
			onClick:{
				webix_icon:function(e,id){
					webix.confirm({
						text:"The order will be deleted.<br/> Are you sure?", ok:"Yes", cancel:"Cancel",
						callback:function(res){
							if(res){
								webix.$$("orderData").remove(id);
							}
						}
					});
				}
			}
		}
	]

};

var layout = {
	type: "space",
	rows:[
		{
			height:40,
			cols:controls
		},
		{
			rows:[
				grid,
				{
					view: "toolbar",
					css: "highlighted_header header6",
					paddingX:5,
					paddingY:5,
					height:40,
					cols:[{
						view:"pager", id:"pagerA",
						template:"{common.first()}{common.prev()}&nbsp; {common.pages()}&nbsp; {common.next()}{common.last()}",
						autosize:true,
						height: 35,
						group:5
					}
					]
				}
			]
		}
	]
};
