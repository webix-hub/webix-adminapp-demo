import {JetView} from "webix-jet";
import { getProgress } from "models/progress";

export default class ProgressView extends JetView {
	config(){
		return {
			type:"clean",
			gravity:3,
			minWidth:500,
			height:300,
			rows:[
				{ template:"Individual employee's progress", type:"header", css:"chart_header" },
				{
					view:"chart",
					border:true,
					localId:"progress",
					type:"splineArea",
					value:"#tasks#",
					color:"#1CA1C1",
					borderWidth:2,
					alpha:0.1,
					line:{
						width:3
					},
					xAxis:{
						template:"#week#", lines:false, color:"#EDEFF0"
					},
					yAxis:{
						start:0, end:100, step:20, color:"#fff", lineColor:"#EDEFF0"
					},
					tooltip:{
						template:"Week #week#<br>#tasks# tasks completed"
					},
					padding:{
						top:10
					}
				}
			]
		};
	}
	init(){
		let chart = this.$$("progress");
		chart.parse(webix.copy(getProgress()));
		this.newLegend("Keith Thompson");
	}
	newLegend(name){
		let chart = this.$$("progress");
		chart.define("legend", {
			values:[
				{ text:name, color:"#1CA1C1" }
			],
			align:"right", layout:"x", valign:"bottom", margin:4, padding:10,
			marker:{
				type:"round", width:7, height:8
			}
		});
		chart.refresh();
	}
}
