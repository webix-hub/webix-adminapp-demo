import {JetView} from "webix-jet";
import { getHours } from "models/hours";

export default class TimeView extends JetView {
	config(){
		return {
			type:"clean",
			height:320, minWidth:215,
			rows:[
				{ template:"Hours spent, %", type:"header", css:"chart_header" },
				{
					localId:"hours",
					view:"chart",
					type:"donut",
					value:"#hours#",
					color:"#color#",
					innerRadius:64,
					shadow:0,
					lineColor:obj => obj.color,
					tooltip:{
						template:"#hours#"
					},
					legend:{
						width:100,
						align:"right",
						valign:"middle",
						template:"#activity#",
						marker:{
							type:"round", width:7, height:8
						}
					},
					padding:{
						top:10, bottom:20
					}
				}
			]
		};
	}
	init(view){
		view.queryView({ view:"chart" }).parse(getHours());
	}
}
