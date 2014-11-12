define([
	"views/modules/data_rating",
	"models/data_arrays",
	"models/orders"
], function(rating,data_arrays, orders){

var titleProgress = {
	view: "toolbar",
	css: "highlighted_header header4",
	paddingX:5,
	paddingY:5,
	height:40,
	cols:[
		{
			"template": "<span class='webix_icon fa-adjust'></span>Progress", "css": "sub_title2", borderless: true
		}
	]
};
var gridProgress = {
	view:"datatable",
	columns:[
		{ id:"id",	header:"",  	width:35,sort:"int"},
		{ id:"name",	header:"Task",	 fillspace:4,sort:"string"},
		{ id:"progress",	header:"Progress",  sort:"int",fillspace:2.5,	template:function(obj){
			var html = "<div class='progress_bar_element'>";
			var className = "progress_result "+(obj.type||"")
			html += "<div title='"+(parseInt(obj.progress*100,10)+"%")+"' class='"+className+"' style='width:"+(obj.progress*100+"%")+"'></div>";
			return html+"</div>";
		}},
		{ id:"num",	header:"Num, %", sort:function(a,b){

			a = a.progress;
			b = b.progress;
			return (a>b?1:(a<b?-1:0));
		}, fillspace:1.5, template:function(obj){
			return parseInt(obj.progress*100,10)+"%";
		}}
	],
	autoheight:true,
	data:data_arrays.progress
};
var titleGroup = {
	view: "toolbar",
	css: "highlighted_header header2",
	paddingX:5,
	paddingY:5,
	height:40,
	cols:[
		{
			"template": "<span class='webix_icon fa-arrows-v'></span>Spans", "css": "sub_title2", borderless: true
		}
	]
};
var gridGroup = {
	view:"datatable",
	columns:[
		{ id:"region",	header:"Region", fillspace: 1 },
		{ id:"name", 	header:"Product", fillspace: 2},
		{ id:"code",	header:"Code" , fillspace: 1 ,tooltip: "", editor:"text"},
		{ id:"sales",	header:"Sales", fillspace: 1 }
	],
	spans:true,
	autoheight:true,
	select:"cell",
	data:data_arrays.colspans
};
var titlePager = {
	view: "toolbar",
	css: "highlighted_header header5",
	paddingX:5,
	paddingY:5,
	height:40,
	cols:[
		{
			"template": "<span class='webix_icon fa-file-text-o'></span>Pager", "css": "sub_title2", borderless: true
		}
	]
};
var gridPager =  {
	margin: 10,
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
			export: true,
			on: {
				onAfterLoad: function(){
					this.select(4);
				}
			},
			onClick:{
				webix_icon:function(e,id,node){
					webix.confirm({
						text:"Are you sure sdfds", ok:"Yes", cancel:"Cancel",
						callback:function(res){
							if(res){
								webix.$$("orderData").remove(id);
							}
						}
					});
				}
			},
			autoheight:true,
			data:orders.getAll,
			pager: "pagerA"
		},
		{
			view:"pager", id:"pagerA",
			size:5,
			height: 35,
			group:5

		}
	]
	};
var layout = {
	type: "space",
	rows:[
		{
			type: "wide",
			cols:[
				rating,
				{

					type:"wide",
					gravity: 0.8,
					rows:[
						{
							type: "clean",
							rows:[
								titleProgress,
								gridProgress
							]
						},
						{

							type: "clean",
							rows:[
								titleGroup,
								gridGroup
							]
						}
					]
				}

			]
		},
		{
			type: "clean",
			rows:[
				titlePager,
				gridPager
			]
		}
	]
};


return { $ui:layout };

});