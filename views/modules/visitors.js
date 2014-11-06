define(function(){

	return {
		$ui:{
			"type": "clean",
			"rows":[
				{
					"template": "<span class='webix_icon fa-sign-in'></span>Visitor statistics", "css": "sub_title", "height": 30
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
		}
	};

});