const chart = {
	view: "chart",
	type: "line",
	xAxis:{
		template: "#month#"
	},
	tooltip: {
		template: "#number#M $"
	},
	minHeight:140,
	yAxis:{
		"start":0,
		"end": 450,
		"step": 150
	},
	offset: false,
	series:[
		{
			"value": "#number#",


			"item":{
				"borderColor": "#fff",
				"color": "#61b5ee",
				"radius": 4
			},
			"line":{
				"color":"#61b5ee",
				"width":1
			}
		}
	],
	padding:{
		"top": 25
	},
	data:[
		{"id": 1, "month": "Jun", "number": 90},
		{"id": 2, "month": "Jul", "number": 220},
		{"id": 3, "month": "Aug", "number": 180},
		{"id": 4, "month": "Sep", "number": 405},
		{"id": 5, "month": "Oct", "number": 275}
	]
};

const donut1 = {
	view: "chart",
	css:"donut_result",
	type: "donut",
	shadow: false,
	color: "#color#",
	pieInnerText: function(obj){
		return obj.result?"<div class='donut_result'>"+obj.value+"</div>":"";
	},
	padding:{
		left:10,
		right:10,
		top:10,
		bottom:10
	},
	data:[
		{value: 30, color: "#61b5ee",result:1},
		{value: 70, color: "#eee"}
	]
};

const donut2 = {
	view: "chart",
	type: "donut",
	shadow: false,
	css:"donut_result",
	color: "#color#",
	padding:{
		left:10,
		right:10,
		top:10,
		bottom:10
	},
	pieInnerText: function(obj){
		return obj.result?"<div class='donut_result'>"+obj.value+"</div>":"";
	},
	data:[
		{value: 25, color: "#61b5ee",result:1},
		{value: 75, color: "#eee"}
	]
};

const donut3 = {
	view: "chart",
	type: "donut",
	css:"donut_result",
	shadow: false,
	color: "#color#",
	pieInnerText: function(obj){
		return obj.result?"<div class='donut_result'>"+obj.value+"</div>":"";
	},
	padding:{
		left:10,
		right:10,
		top:10,
		bottom:10
	},
	data:[
		{value: 45, color: "#61b5ee",result:1},
		{value: 55, color: "#eee"}
	]
};

const layout = {	
	type: "clean",
	rows:[
		chart,
		{
			height: 90,
			type: "clean",
			cols:[
				donut1,
				donut2,
				donut3
			]
		},
		{
			height: 40,
			type: "clean",
			css: "donut_titles",
			cols:[
				{
					template: "Europe"
				},
				{
					template: "Asia"
				},
				{
					template: "Northern America"
				}
			]
		}
	]
};

export default layout;