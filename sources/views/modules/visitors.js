import {JetView} from "webix-jet";
import {data} from "models/visitors";

export default class VisitorsView extends JetView{
	config(){
		return layout;
	}
	init(view){
		view.queryView({ view:"chart" }).parse(data);
	}
}
const layout = {
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
				{ "value": "#newv#", "color": "#61b5ee"}
			],
			"padding":{
				"top": 25
			}
		}
	]
};