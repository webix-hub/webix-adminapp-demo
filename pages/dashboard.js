[{
	"id": "dashboard",
	"type": "space",

	"rows":[
		{
			autoheight: true,
			css: "tiles",
			template: function(data){
				var items = data.items;
				var html = "<div class='flex_tmp'>";
				for(var i=0; i < items.length; i++){
					html += "<div class='item "+items[i].css+"'>"+items[i].text+"</div>"
				}
				html += "</div>";
				return html;
			},
			data: {
				items:[
					{id:1, text: "New Orders", value: 100, icon: "cart", css: "orders"},
					{id:2, text: "New Users", value: 20, icon: "user", css: "users"},

					{id:4, text: "New Feedbacks", value: 10, icon: "quote-right", css: "feedbacks"},
					{id:3, text: "Profit", value: "+15%", icon: "line-chart", css:"profit" }
				]
			}
		},
		{
			"height": 220,

			"type": "wide",
			"cols": [
				{
					"type": "clean",
					"rows":[
						{
							"template": "Visitor statistics", "css": "sub_title", "height": 30
						},
						{
							"view": "chart", "type": "stackedArea",
							"legend":{
								"layout": "x",

								"align": "right",
								"values": [{"text":"New visitors", "color": "#61b5ee"},{"text": "Recurrent", "color": "#a4b4bf"}]
							},
							"offset":0,
							alpha:0.8,

							"xAxis":{
								"template": "#month#"
							},
							"radius":0,
							"yAxis":{
								"start":0,
								"end": 2000,
								"step": 500
							},
							"series":[



								{ "value": "#rec#", "color": "#a4b4bf"},
								{ "value": "#new#", "color": "#61b5ee"}
							],
							"padding":{
								"top": 25
							},
							"data":[
								{"id": 1, "month": "Jun", "new": 300, "rec": 600},
								{"id": 2, "month": "Jul", "new": 100, "rec":  400},
								{"id": 3, "month": "Aug", "new": 400, "rec": 700},
								{"id": 4, "month": "Sep", "new": 600, "rec": 900},
								{"id": 5, "month": "Oct", "new": 400, "rec": 400}
							]
						}
					]
				},
				{
					"type": "clean",
					"rows":[
						{
							"template": "Orders", "css": "sub_title", "height": 30
						},
						{
							"view": "chart", "type": "bar",
							//"alpha": 0.5,
							"xAxis":{
								"template": "#month#"
							},


							"yAxis":{
								"start":0,
								"end": 500,
								"step": 100
							},
							preset:"alpha",
							"series":[
								{
									"value": "#number#",
									color: "#9e89eb",

									"item":{
										"borderColor": "#fff",
										"color": "#b07be5",
										"radius": 3
									},
									"line":{
										"color":"#b07be5",
										"width":2
									}
								}
							],
							"padding":{
								"top": 25
							},
							"data":[
								{"id": 1, "month": "Jun", "number": 100},
								{"id": 2, "month": "Jul", "number": 250},
								{"id": 3, "month": "Aug", "number": 200},
								{"id": 4, "month": "Sep", "number": 350},
								{"id": 5, "month": "Oct", "number": 300}
							]
						}
					]
				}
			]
		},
		{
			type: "wide",
			"cols": [
				{
					gravity: 2,
					//"type": "clean",
					"rows":[
						{
						 "template": "Pending Tasks", type:"header", "css": "sub_title", "height": 50
						 },
						{
							"view": "list",
							css: "tasks_list",

							"type": {
								marker: function(obj){
									return "<span class='webix_icon_btn fa-bell-o marker "+obj.type+"' style='max-width:32px;' ></span>";
								},
								check:  webix.template('<span class="webix_icon_btn fa-{obj.$check?check-:}square-o list_icon" style="max-width:32px;"></span>'),
								template: function(obj,type){

									return "</span>"+type.check(obj,type)+type.marker(obj,type)+"<span class='list_text'>"+obj.text+"</span>"
								}
							},
							data: [
								{ id: "1", text: "Prepare finance report", type: "internal"},
								{ id: "2", text: "Solex project strategy  meeting", type: "projects"},
								{ id: "3", text: "WestEurope partners call", type: "internal"},
								{ id: "4", text: "Prepare presentation for summer conference", type: "company"},
								{ id: "5", text: "Market research analysis", type: "internal"}
							],
							on: {
								onAfterRender: function(){
									this.on_click["webix_icon_btn"] = function(e,id,node){
										var item = this.getItem(id);
										item.$check = !item.$check;
										this.refresh(id);
									}
								}
							}



						},
						{
							css: "show_all bg", template: "Show all tasks <span class='webix_icon fa-angle-double-right'></span>", height: 40
						}
					]
				},
				{
					gravity: 3,
					//"type": "clean",
					"rows":[
						{
						 "template": "<span class='webix_icon fa-comments-o'></span>Messages", "css": "sub_title", "height": 50
						},
						{
							"view": "list",
							css: "chat_list",
							autoheight: true,
							"type": {
								"height": 55,
								"template": function(obj){
									var html = 	"<img class='photo' src='photos/"+obj.personId+".png' />";
									html += "<div class='text'><div class='name'>"+obj.name+"<div class='time'>"+obj.time+"</div></div>";
									html += obj.text+"</div>";
									return html;
								}
							},
							"data": [
								{ id: "1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", personId: 1, time:"Just now", name: "Peter Johnson"},
								{ id: "2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque", personId: 2, time:"Just now", name: "Vera Liu"},
								{ id: "3", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", personId: 1, time:"11:40", name: "Peter Johnson"},
								{ id: "4", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque", personId: 2, time:"11:30", name: "Peter Johnson"},
								{ id: "5", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", personId: 1, time:"10:10", name: "Vera Liu"},
								{ id: "6", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque", personId: 2, time:"9:50", name: "Vera Liu"}
							]
						},
						{
							view: "form",
							css: "show_all",
							paddingX: 10,
							paddingY: 2,

							cols:[
								{
									view: "text", placeholder: "Type a message here",height:36
								},
								{
									view: "icon", icon: "search",height:36
								}
							]
						}

					]
				}
			]
		},
		{
			id:"orders",
			view:"treetable", select:true,
			autoheight: true,
			columns:[
				{id:"id", header:"#", width:50},
				{id:"employee", header:"Employee", sort:"string", minWidth:150, fillspace:1},
				{id:"customer", header:"Customer", sort:"string", minWidth:150, fillspace:1},

				{id:"status", header:"Status", sort:"string", width:90},
				{id:"fee", header:"Fee", width:90, sort:"string", format:webix.i18n.priceFormat},
				{id:"taxes", header:"Taxes", width:90, sort:"string", format:webix.i18n.priceFormat},
				{id:"total", header:"Total", width:90, sort:"string", format:webix.i18n.priceFormat},
				{id:"shipping_company", header:"Shipping Company", sort:"string", },
				{id:"payment_method", header:"Payment method", width:130, sort:"string"},
				{id:"date", header:"Date", sort:"string", width:100}
			],
			url:"data/orders_short.json"
		}
	]
}]