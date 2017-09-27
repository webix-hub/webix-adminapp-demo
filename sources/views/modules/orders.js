const ui = {
	"type": "clean",
	"rows":[
		{
			"template": "<span class='webix_icon fa-bar-chart'></span>Orders", "css": "sub_title", "height": 30
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
						"color": "#49cd81",
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
};

export default ui;