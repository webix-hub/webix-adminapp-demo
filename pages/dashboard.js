[{
	"id": "dashboard",
	"type": "clean",

	"rows":[
		{
			autoheight: true,
			css: "tiles",
			template: function(data){
				var t = null;
				var items = data.items;
				var html = "<div class='flex_tmp'>";
				for(var i=0; i < items.length; i++){
					t = items[i];
					html += "<div class='item "+t.css+"'>";
					html += "<div class='webix_icon icon fa-"+ t.icon+"'></div>";
					html += "<div class='details'><div class='value'>"+t.value+"</div><div class='text'>"+t.text+"</div></div>";
					html +=  "<div class='footer'>View more <span class='webix_icon fa-angle-double-right'></span></div>"
					html += "</div>";
				}
				html += "</div>";
				return html;
			},
			data: {
				items:[
					{id:1, text: "New Orders", value: 250, icon: "check-square-o", css: "orders"},
					{id:2, text: "New Users", value: 300, icon: "user", css: "users"},

					{id:4, text: "New Feedbacks", value: 40, icon: "quote-right", css: "feedbacks"},
					{id:3, text: "Profit", value: "+25%", icon: "line-chart", css:"profit" }
				]
			}
		},
		{
			"type": "space",
			rows:[
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
								barWidth: 60,
								alpha:0.85,
								radius:0,
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
								gravity: 3,

								//"type": "clean",
								"rows":[
									{
										"template": "<span class='webix_icon fa-comments-o'></span>Messages", "css": "sub_title", "height": 50
									},
									{
										"view": "list",
										css: "chat_list",
										maxHeight: 300,
										minHeight: 250,
										"type": {
											"height": "auto",
											"template": function(obj){
												var text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. ";
												var html = 	"<img class='photo' src='photos/"+obj.personId+".png' />";
												html += "<div class='text'><div class='name'>"+obj.name+"<div class='time'>"+obj.time+"</div></div>";
												html += text+"</div>";
												return html;
											}
										},
										"data": [
											{ id: 1,  personId: 1, time:"Just now", name: "Peter Johnson"},
											{ id: 2,  personId: 2, time:"Just now", name: "Vera Liu"},
											{ id: 3, personId: 1, time:"11:40", name: "Peter Johnson"},
											{ id: 4, personId: 2, time:"11:30", name: "Vera Liu"},
											{ id: 5, personId: 1, time:"10:10", name: "Peter Johnson"},
											{ id: 6, personId: 2, time:"9:50", name: "Vera Liu"}
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
							},
							{
								gravity: 2,
							//"type": "clean",
							"rows":[
								/*{
									"template": "Project Map", type:"header", "css": "sub_title", "height": 50
								},*/
								{
									view:"google-map",
									id:"map",
									zoom:2,
									center:[ 48.724, 8.215 ]


								}
							]
						}

					]
				},
				{
					type: "wide",
					"cols": [
						{
							gravity: 3,
							view:"dhx-scheduler",
							date:new Date(2010,0,5),
							mode:"week",
							init:function(){
								scheduler.config.xml_date="%Y-%m-%d %H:%i";
								scheduler.config.first_hour = 6;
								scheduler.config.multi_day = false;
							},
							ready:function(){
								scheduler.parse("<data><event id='1261150506' start_date='2010-01-01 18:00' end_date='2010-01-03 18:00' text='Sister Act' details='Palladium' /><event id='1261150507' start_date='2010-01-02 07:00' end_date='2010-01-02 09:00' text='Cat On a Hot Tin Roof' details='Novello Theatre' /><event id='1261150508' start_date='2010-01-02 07:00' end_date='2010-01-02 09:00' text='Grease' details='Piccadilly Theatre' /><event id='1261150509' start_date='2010-01-03 17:00' end_date='2010-01-03 19:00' text='Ladbrokes.com World Darts Championships' details='Alexandra Palace' /><event id='1261150510' start_date='2010-01-05 14:00' end_date='2010-01-05 16:00' text='Calendar Girls' details='Noel Coward Theatre' /><event id='1261150511' start_date='2010-01-06 08:00' end_date='2010-01-08 08:00' text='Dirty Dancing' details='Aldwych Theatre' /><event id='1261150512' start_date='2010-01-07 15:00' end_date='2010-01-07 17:00' text='Cirque du Soleil Varekai' details='Royal Albert Hall' /><event id='1261150513' start_date='2010-01-08 15:00' end_date='2010-01-08 17:00' text='Grease' details='Piccadilly Theatre' /><event id='1261150514' start_date='2010-01-09 09:00' end_date='2010-01-09 11:00' text='The Lion King' details='Lyceum Theatre' /><event id='1261150515' start_date='2010-01-09 07:00' end_date='2010-01-09 09:00' text='Cirque du Soleil Varekai' details='Royal Albert Hall' /><event id='1261150516' start_date='2010-01-10 10:00' end_date='2010-01-12 10:00' text='Cirque du Soleil Varekai' details='Royal Albert Hall' /><event id='1261150517' start_date='2010-01-12 09:00' end_date='2010-01-12 11:00' text='Masters Snooker 2010      Afternoon session' details='Wembley Arena' /></data>");

							}

						},
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
									autoheight: true,
									"type": {

										marker: function(obj){
											return "<span class='webix_icon_btn fa-bell-o marker "+obj.type+"' style='max-width:32px;' ></span>";
										},
										check:  webix.template('<span class="webix_icon_btn fa-{obj.$check?check-:}square-o list_icon" style="max-width:32px;"></span>'),
										template: function(obj,type){
											return "<div class='"+(obj.$check?"done":"")+"'>"+type.check(obj,type)+"<span class='list_text'>"+obj.text+"</span><span class='marker "+obj.type+"'>"+(obj.type||"")+"</span></div>"
										}
									},
									data: [
										{ id: "1", text: "Prepare finance report"},
										{ id: "2", text: "Solex project strategy  meeting", type: "projects"},
										{ id: "3", text: "WestEurope partners call"},
										{ id: "4", text: "Prepare presentation for summer conference", type: "company"},
										{ id: "5", text: "Market research analysis"},
										{ id: "6", text: "Check messages"},
										{ id: "7", text: "Discussing new theme for website", type: "company"}
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
						}


					]
				}
				/*{
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
				}*/
			]

		}
	]
}]