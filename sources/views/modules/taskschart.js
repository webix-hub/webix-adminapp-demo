const ui  = {
	view:"chart",
	type:"barH",

	value:"#progress#",
	minHeight: 230,
	color:"#color#",
	barWidth:30,
	radius:2,
	tooltip:{
		template:"#progress# %"
	},
	yAxis:{
		template:"#name#"
	},
	xAxis:{
		start:0,
		end:100,
		step:10,
		template:function(obj){
			return (obj%20?"":obj);
		}
	},
	padding:{
		left: 120
	},
	data: [
		{ id: "1", name: "Report",progress:55, color: "#49cd81"},
		{ id: "2", name: "Strategy  meeting", progress:20,color: "#a693eb"},
		{ id: "3", name: "Partners meeting",progress:70, color: "#49cd81"},
		{ id: "4", name: "Research analysis",progress:30, color: "#a693eb"},
		{ id: "5", name: "Presentation",progress:60, color: "#f19b60"}
	],
	legend:{
		align:"center",
		layout: "x",
		valign:"bottom",
		template: "#region#",
		values:[
			{text: "Company", color: "#49cd81"},
			{text: "Inner tasks", color: "#f19b60"},
			{text: "Projects", color: "#a693eb"}
		]
	}
};

export default ui;