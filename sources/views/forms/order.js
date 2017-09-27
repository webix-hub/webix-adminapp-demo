const ui = {
	view:"window", modal:true, id:"order-win",
	head:"Add new order",
	body:{
		paddingY:20, paddingX:30, elementsConfig:{labelWidth: 140}, view:"form", id:"order-form", elements:[
			{ view:"combo", name:"customer", label:"Customer", id:"order-customer", options:[{ id:"1", value:"Virgen C. Holcombe"}, { id:"2", value:"Tory H. Ventura"}, { id:"3", value:"Jacquline A. Coats"}, { id:"4", value:"Jamila N. Mccallister"}, { id:"5", value:"Sabrina N. Hermann"}, { id:"6", value:"Bradly N. Mauro"}, { id:"7", value:"Ashleigh G. Denham"}, { id:"8", value:"Stephen H. Peachey"}, { id:"9", value:"Amado T. Cano"}, { id:"10", value:"Olimpia C. Whelan"}, { id:"11", value:"Regine H. Field"}, { id:"12", value:"Roxanna C. Cass"}, { id:"13", value:"Reba H. Casteel"}, { id:"14", value:"Jettie P. Whelan"}, { id:"15", value:"Sherry G. Richards"}, { id:"16", value:"Stephane A. Chandler"}, { id:"17", value:"Amee A. Marshall"}], width:350},
			{ view:"combo", name:"employee", label:"Salesperson", id:"order-sales", options:[{ id:"1", value:"Ray M. Parra"}, { id:"2", value:"Suellen G. Ritter"}, { id:"3", value:"Janelle P. Blunt"}, { id:"4", value:"Cristopher B. Acker"}, { id:"5", value:"Lane E. Dion"}, { id:"6", value:"Rossana M. Mcknight"}, { id:"7", value:"Becki P. Perryman"}, { id:"8", value:"Jolie P. Sparks"}, { id:"9", value:"Shirley M. Mattingly"}, { id:"10", value:"Rosario H. Mccracken"}, { id:"11", value:"Sudie M. Goldsmith"}, { id:"12", value:"Sherley D. Berryman"}, { id:"13", value:"Romaine B. Alley"}, { id:"14", value:"Giovanni B. Weston"}]},
			{ view:"combo", name:"product", label:"Product", id:"order-product", options:[{ id:1, value:"Webix Chai"}, { id:2, value:"Webix Syrup"}, { id:3, value:"Webix Cajun Seasoning"}, { id:4, value:"Webix Olive Oil"}, { id:5, value:"Webix Boysenberry Spread"}, { id:6, value:"Webix Dried Pears"}, { id:7, value:"Webix Curry Sauce"}, { id:8, value:"Webix Walnuts"}, { id:9, value:"Webix Fruit Cocktail"}, { id:10, value:"Webix Chocolate Biscuits Mix"}, { id:11, value:"Webix Marmalade"}, { id:12, value:"Webix Scones"}, { id:13, value:"Webix Beer"}, { id:14, value:"Webix Crab Meat"}, { id:15, value:"Webix Clam Chowder"}, { id:16, value:"Webix Coffee"}, { id:17, value:"Webix Chocolate"}]},
			{ view:"combo", name:"shipment", label:"Shipping Company", id:"shipping_company", options:[ "Shipping A", "Shipping B", "Shipping C", "Shipping D", "Shipping E", "Shipping F", "Shipping G"]},
			{ view:"datepicker", label:"Order Date", value:new Date(), format:"%d  %M %Y" },
			{
				margin:10,
				cols:[
					{},
					{ view:"button", label:"Add", type:"form", align:"center", width:120, click:function(){
						webix.$$("order-win").hide();
					}},
					{ view:"button", label:"Cancel",align:"center", width:120, click:function(){
						webix.$$("order-win").hide();
					}}
				]
			}

		]
	}
};

export default ui;