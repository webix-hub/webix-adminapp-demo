import {JetView} from "webix-jet";
import {data} from "models/topsales";

export default class TopSalesView extends JetView{
	config(){
		return layout;
	}
	init(view){
		view.queryView({ view:"chart" }).parse(data);
	}
}

const chart = {
	view:"chart",
	borderless: true,
	type: "bar",
	height: 130,
	id: "productsBar",
	barWidth: 60,
	radius:0,
	alpha: 0.9,
	color: function(obj){
		let color = "#a693eb";
		if(obj.productId == 2)
			color = "#63b4ea";
		else if(obj.productId == 3){
			color = "#f19b60";
		}
		else if(obj.productId == 4){
			color = "#49cd81";
		}

		return color;
	},
	yAxis:{
		template: function(value){ return parseInt(value,10); }
	},
	xAxis: {
		template: "#name#"
	},
	on: {
		onAfterLoad: function(){
			webix.$$("topSelling").setValue("month");
		}
	},
	padding:{
		top:0,
		left:50,
		right:10,
		bottom: 20
	}
};

const form = {
	type: "form",
	cols:[
		{
			view: "radio", id:"topSelling", label: "", labelWidth: 0, vertical: true,on:{
				onChange: function(){
					webix.$$("productsBar").filter(function(obj){ return obj.selection == webix.$$("topSelling").getValue(); });
				}
			},
			options: [
				{id: "month", value:"Last month"},
				{id: "month3", value: "Last 3 months"}
			]
		}
	]
};

const layout = {
	rows:[
		{
			view: "toolbar",
			paddingX:5,
			paddingY:5,
			height:40,	css: "highlighted_header header3", elements:[
				{"template": "<span class='webix_icon fa-bar-chart'></span>Top selling products", borderless: true,"css": "sub_title2"}
			]

		},
		form,
		chart		
	]
};