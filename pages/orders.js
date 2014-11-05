[
	{
		"id": "orders",
		"type": "space",

		"rows":[
			{
				cols:[
					{ view: "button", type: "iconButton", icon: "plus", label: "Add order", width: 130, click: function(){

						if(!app.logic.orderWin)
							app.logic.orderWin = webix.ui({
								view:"window", modal:true, id:"order-win", position:"center",
								head:"Add new order",
								body:{
									margin:20, paddingY:5, paddingX:10, elementsConfig:{labelWidth: 140}, view:"form", id:"order-form", elements:[
										{ view:"combo", name:"customer", label:"Customer", id:"order-customer", options:[{ id:"1", value:"Virgen C. Holcombe"}, { id:"2", value:"Tory H. Ventura"}, { id:"3", value:"Jacquline A. Coats"}, { id:"4", value:"Jamila N. Mccallister"}, { id:"5", value:"Sabrina N. Hermann"}, { id:"6", value:"Bradly N. Mauro"}, { id:"7", value:"Ashleigh G. Denham"}, { id:"8", value:"Stephen H. Peachey"}, { id:"9", value:"Amado T. Cano"}, { id:"10", value:"Olimpia C. Whelan"}, { id:"11", value:"Regine H. Field"}, { id:"12", value:"Roxanna C. Cass"}, { id:"13", value:"Reba H. Casteel"}, { id:"14", value:"Jettie P. Whelan"}, { id:"15", value:"Sherry G. Richards"}, { id:"16", value:"Stephane A. Chandler"}, { id:"17", value:"Amee A. Marshall"}], width:350},
										{ view:"combo", name:"employee", label:"Salesperson", id:"order-sales", options:[{ id:"1", value:"Ray M. Parra"}, { id:"2", value:"Suellen G. Ritter"}, { id:"3", value:"Janelle P. Blunt"}, { id:"4", value:"Cristopher B. Acker"}, { id:"5", value:"Lane E. Dion"}, { id:"6", value:"Rossana M. Mcknight"}, { id:"7", value:"Becki P. Perryman"}, { id:"8", value:"Jolie P. Sparks"}, { id:"9", value:"Shirley M. Mattingly"}, { id:"10", value:"Rosario H. Mccracken"}, { id:"11", value:"Sudie M. Goldsmith"}, { id:"12", value:"Sherley D. Berryman"}, { id:"13", value:"Romaine B. Alley"}, { id:"14", value:"Giovanni B. Weston"}]},
										{ view:"combo", name:"product", label:"Product", id:"order-product", options:[{ id:1, value:"Webix Chai"}, { id:2, value:"Webix Syrup"}, { id:3, value:"Webix Cajun Seasoning"}, { id:4, value:"Webix Olive Oil"}, { id:5, value:"Webix Boysenberry Spread"}, { id:6, value:"Webix Dried Pears"}, { id:7, value:"Webix Curry Sauce"}, { id:8, value:"Webix Walnuts"}, { id:9, value:"Webix Fruit Cocktail"}, { id:10, value:"Webix Chocolate Biscuits Mix"}, { id:11, value:"Webix Marmalade"}, { id:12, value:"Webix Scones"}, { id:13, value:"Webix Beer"}, { id:14, value:"Webix Crab Meat"}, { id:15, value:"Webix Clam Chowder"}, { id:16, value:"Webix Coffee"}, { id:17, value:"Webix Chocolate"}]},
										{ view:"combo", name:"shipment", label:"Shipping Company", id:"shipping_company", options:[ "Shipping A", "Shipping B", "Shipping C", "Shipping D", "Shipping E", "Shipping F", "Shipping G"]},
										{ view:"datepicker", label:"Order Date", value:new Date(), format:"%d  %M %Y" },
										{ view:"button", label:"Add", type:"form", align:"center", width:150, click:function(){
											webix.$$("order-win").close();
										}}
									]
								}
							}).show();
					}},
					{ view: "button", type: "iconButton", icon: "external-link", label: "Export", width: 120, popup: "exportPopup"},
					{},
					{view:"richselect", id:"order_filter", value: "all", maxWidth: 400, minWidth: 250, vertical: true, labelWidth: 100, options:[
						{id:"all", value:"All"},
						{id:"new", value:"Need Invoicing"},
						{id:"ready", value:"Ready to Ship"},
						{id:"completed", value:"Completed"},
						{id:"cancelled", value:"Cancelled"}
					],  label:"Filter orders", on:{
							onChange:function(){
								var val = this.getValue();
								if(val=="all")
									$$("orderData").filter("#status#","");
								else
									$$("orderData").filter("#status#",val);
							}
						}
					}
				]

			},
			{
				id:"orderData",
				view:"treetable", select:true,
				columns:[
					{id:"id", header:"#", width:50},
					{id:"employee", header:["Employee", {content:"selectFilter"} ], sort:"string", minWidth:150, fillspace:1},
					{id:"customer", header:["Customer", {content:"selectFilter"} ], sort:"string", minWidth:150, fillspace:1},

					{id:"status", header:"Status", sort:"string", width:90},
					{id:"fee", header:"Fee", width:90, sort:"string", format:webix.i18n.priceFormat},
					{id:"taxes", header:"Taxes", width:90, sort:"string", format:webix.i18n.priceFormat},
					{id:"total", header:"Total", width:90, sort:"string", format:webix.i18n.priceFormat},
					{id:"shipping_company", header:"Shipping Company", sort:"string", },
					{id:"payment_method", header:"Payment method", width:130, sort:"string"},
					{id:"date", header:"Date", sort:"string", width:100},
					{id:"trash", header:"&nbsp;", width:35, template:"<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"}
				],
				export: true,
				url: "data/orders.json",
				onClick:{
					"webix_icon":function(e,id,node){
						webix.confirm({
							text:"Are you sure", ok:"Yes", cancel:"Cancel",
							callback:function(res){
								if(res){
									webix.$$("orderData").remove(id);
								}
							}
						})
					}
				},
				onContext:{}
			}
		]
	}

]