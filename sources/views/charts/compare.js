import {JetView} from "webix-jet";
import {getProjects} from "models/projects";

export default class CompareView extends JetView {
	config(){
		return {
			type:"clean",
			gravity:2,
			rows:[
				{ template:"Total number of tasks by projects", type:"header", css:"chart_header" },
				{
					localId:"chart",
					view:"chart",
					type:"barH",
					radius:0,
					barWidth:16,
					yAxis:{
						template:"#project#", lines:false, color:"#EDEFF0"
					},
					xAxis:{
						start:0, step:15, end:90, color:"#fff", lineColor:"#EDEFF0"
					},
					legend:{
						values:[
							{ text:new Date().getFullYear()-1,color:"#8664C6" },
							{ text:new Date().getFullYear(),color:"#1CA1C1" }
						],
						valign:"bottom", align:"right", layout:"x",
						margin:4, padding:10,
						marker:{
							type:"round", width:7, height:8
						}
					},
					series:[
						{
							value:"#tasks17#",
							color:"#8664C6",
							tooltip:{
								template:"#tasks17#"
							}
						},
						{
							value:"#tasks18#",
							color:"#1CA1C1",
							tooltip:{
								template:"#tasks18#"
							}
						}
					],
					padding:{ left:50, top:5, bottom:44 }
				}
			]
		};
	}
	init(){
		this.$$("chart").parse(getProjects());
	}
}
