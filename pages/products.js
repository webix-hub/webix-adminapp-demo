[{
	"id": "products",
	"type": "space",

	"rows":[
		{
			type: "form",

			cols:[
				{
					view: "radio", label: "Top selling", vertical: true, options: [
						{id: "month", value:"Last month"},
						{id: "month3", value: "Last 3 months"},
						{id: "year", value: "This year"}

					]
				}
			]
		},
		{
			type: "clean",
			rows:[
				{
					view: "form",
					paddingX: 5,
					paddingY:5,
					cols:[
						{
							"template": "All products", "css": "sub_title", borderless: true
						},
						{
							view: "button", value: "Add new product", width: 150
						}
					]

				},
				{
					id:"productsData",
					view:"datatable", select:true, editable:true, editaction:"dblclick",
					columns:[
						{id:"id", header:"#", width:50},
						{id:"code", header:"Code", minWidth:100, fillspace: 1},
						{id:"name", header:"name", minWidth:220, fillspace: 2, editor:"text"},
						{id:"cost", header:"Cost", minWidth:70, fillspace: 1, format:webix.i18n.priceFormat},
						{id:"price", header:"Price", minWidth:70, fillspace: 1, format:webix.i18n.priceFormat},
						{id:"trash", header:"&nbsp;", width:35, template:"<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"}
					],
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

		}
	]
}]