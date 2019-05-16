import {JetView} from "webix-jet";
import {getStats} from "models/statistics";

export default class StatisticsView extends JetView{
	config(){
		return {
			height:340, type:"clean", rows:[
				{ template:"Total number of tasks completed", type:"header", css:"chart_header" },
				{
					localId:"stats",
					view:"chart",
					type:"scatter",
					height:300,
					xValue:"#week#",
					padding:{
						top:4, bottom:44
					},
					xAxis:{
						start:0, end:53, step:2, lines:false, color:"#EDEFF0",
						template:obj => obj == 0 ? "" : obj
					},
					yAxis:{
						start:0, step:25, end:100, color:"#fff", lineColor:"#EDEFF0"
					},
					legend:{
						values:[
							{ text:new Date().getFullYear()-1, color:"#8664C6" },
							{ text:new Date().getFullYear(), color:"#1CA1C1" }
						],
						align:"right", layout:"x", valign:"bottom",
						margin:4, padding:10,
						marker:{
							type:"round", width:7, height:8
						}
					},
					series:[
						{
							value:"#tasks17#",
							disableLines:false,
							item:{
								borderColor:"#8664C6", borderWidth:2,
								radius:3
							},
							line:{ color:"#8664C6", width:2 },
							tooltip:{
								template:"Week #week#<br>#tasks17# tasks completed"
							}
						},
						{
							value:"#tasks18#",
							item:{
								borderColor:"#1CA1C1", borderWidth:2, radius:3
							},
							line:{ color:"#1CA1C1", width:2 },
							tooltip:{
								template:"Week #week#<br>#tasks18# tasks completed"
							}
						}
					]
				}
			]
		};
	}
	init(){
		this.$$("stats").parse(getStats());
	}
}
