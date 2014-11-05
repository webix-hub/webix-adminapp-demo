[{
	"id": "products",
	"type": "space",



	"rows":[

		{
			type: "wide",
			cols:[
				{
					type: "clean",
					rows:[
						{
							view: "form",
							paddingX:5,
							paddingY:5,
							height:40,
							cols:[
								{
									"template": "<span class='webix_icon fa-table'></span>All products", "css": "sub_title2", borderless: true
								},
								{view: "button", type: "iconButton", icon:"file-excel-o",width:150, label: "Export To Excel", click: function(){$$("productsData").exportToExcel()}}

							]

						},
						{
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
							url:"data/products.json",
							onClick:{
								"webix_icon":function(e,id,node){
									webix.confirm({
										text:"Are you sure", ok:"Yes", cancel:"Cancel",
										callback:function(res){
											if(res){
												webix.$$("productsData").remove(id);
											}
										}
									})
								}
							}
						}
					]
				},
				{

					type: "wide",
					rows:[
						{
							rows:[
								{
									"template": "<span class='webix_icon fa-list-alt'></span>Product form", "css": "sub_title", "height": 50
								},
								{
									view: "form",
									elementsConfig:{
										labelWidth: 120
									},
									elements:[
										{view: "text", label: "Code"},
										{view: "text", label: "Name"},
										{view: "text", label: "Price"},
										{view: "checkbox", label: "In Store",value: 1},
										{view: "label", label: "Description", height:30},

										{ id:'details', id:'editor', view:"tinymce-editor", height: 100},
										{
											view: "button", value: "Add new product", type: "form",inputWidth: 150
										},{

										}
									]
								}
							]


						},
						{
							rows:[

								{
									"template": "<span class='webix_icon fa-bar-chart'></span>Top selling products", "css": "sub_title",  height:50
								},
								{
									type: "form",

									cols:[
										{
											view: "radio", id:"topSelling", label: "", maxWidth: 110,  labelWidth: 0, vertical: true,on:{
											onChange: function(){
												$$("productsBar").filter(function(obj){return obj.selection == $$("topSelling").getValue()});
											}
										},
											options: [
												{id: "month", value:"Last month"},
												{id: "month3", value: "Last 3 months"}
											]
										},
										{
											view:"chart",
											borderless: true,
											type: "bar",
											height: 130,
											id: "productsBar",
											barWidth: 60,
											radius:0,
											alpha: 0.9,
											color: function(obj){
												var color = "#a693eb";
												if(obj.productId == 2)
													color = "#63b4ea";
												else if(obj.productId == 3){
													color = "#f19b60";
												}
												else if(obj.productId == 4){
													color = "#49cd81";
												}

												return color;
											},
											yAxis:{
												template: function(value){return parseInt(value,10)}
											},
											xAxis: {

												template: "#name#"
											},
											on: {
												onAfterLoad: function(){
													$$("topSelling").setValue("month");
												}
											},
											padding:{
												top:0,
												left:50,
												right:10,
												bottom: 20
											},
											data:[
												{productId:1,value: 15000,selection: "month", name:"Chai"},
												{productId:1,value: 35000,selection: "month3", name:"Chocolate"},
												{productId:1,value: 130000,selection: "year", name:"Chai"},
												{productId:2,value: 20000,selection: "month", name:"Olive Oil"},
												{productId:2,value: 50000,selection: "month3", name:"Olive Oil"},
												{productId:2,value: 140000,selection: "year", name:"Olive Oil"},
												{productId:3,value: 17000,selection: "month", name:"Coffee"},
												{productId:3,value: 40000,selection: "month3", name:"Coffee"},
												{productId:3,value: 120000,selection: "year", name:"Coffee"},
												{productId:4,value: 9000,selection: "month", name:"Syrup"},
												{productId:4,value: 45000,selection: "month3", name:"Marmalade"},
												{productId:4,value: 100500,selection: "year", name:"Syrup"}
											]
										}
									]
								}
							]
						}


				]}
			]
		}


	]
}]