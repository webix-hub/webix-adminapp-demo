const tasks = {
	gravity: 3,
	"type": "clean",
	"rows":[
		{
			"template": "<span class='webix_icon fa-pie-chart'></span>Pie chart", "css": "sub_title", "height": 30
		},
		{
			"view": "chart",
			"type": "pie3D",
			color: "#color#",
			shadow: false,
			tooltip:{
				template: "#value#%"
			},
			minHeight:200,
			padding:{
				left:15,
				right:15,
				bottom:10,
				top:10
			},
			legend:{
				layout:"y",
				width:100,
				align:"right",
				valign:"middle",
				template: "#region#"
			},
			data:[
				{color: "#61b5ee", region: "Asia",value: 35},
				{color: "#27ae60", region: "Europe",value:30},
				{color: "#9e89eb", region: "USA",value: 25},
				{color: "#f19b60", region: "Australia",value:10}

			]
		}
	]
};

export default tasks;