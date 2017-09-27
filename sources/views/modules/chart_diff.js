const dataset = [
	{ sales:4.1, sales2:8.0, year:"08" },
	{ sales:4.3, sales2:9.0, year:"09" },
	{ sales:7.6, sales2:11.0, year:"10" },
	{ sales:7.8, sales2:13.0, year:"11" },
	{ sales:7.2, sales2:10.0, year:"12" },
	{ sales:5.3, sales2:14.0, year:"13" },
	{ sales:4.8, sales2:12.0, year:"14" }
];

const chart = {
	view:"chart",
	type: "bar",
	barWidth: 40,
	padding:{
		left:30,
		bottom: 60
	},
	radius:0,
	yAxis:{
	},
	xAxis:{
		lines:true,
		title:"Sales per year<br/>&nbsp;",
		template:"'#id#"
	},
	legend:{
		layout:"y",
		width:100,
		align:"right",
		valign:"middle",
		values:[
			{text:"Asia",color:"#61b5ee"},
			{text:"Europe",color:"#e9df40"},
			{text:"Average", toggle:true,markerType: "item"}
		]
	},
	scheme:{
		$group: {
			by:"year",
			map:{
				salesA:["sales2","any"],
				salesB:["sales","any"],
				salesAverage:["sales",getAverage]
			}
		}
	},
	series:[
		{
			value:"#salesA#",
			color:"#61b5ee",

			gradient: "falling",
			alpha: 0.8
		},
		{
			type:"area",
			alpha:0.4,
			value:"#salesB#",
			color:"#e9df40"
		},
		{
			type:"line",
			value:"#salesAverage#",
			item:{
				radius:2,
				borderColor: "#27ae60"
			},
			line:{
				color:"#27ae60",
				width:2
			}
		}
	],
	data: dataset
};
function getAverage(property,data){
	let summ = 0;
	for(let i = 0; i < data.length; i++){
		summ += (parseFloat(data[i].sales)||0);
		summ += (parseFloat(data[i].sales2)||0);
	}
	return data.length?summ/(data.length*2):0;
}


export default chart;