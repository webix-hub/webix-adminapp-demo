import {JetView} from "webix-jet";
import {data} from "models/pivot";

export default class SheetView extends JetView{
	config(){
		const config = {
			type:"space", rows:[{
				view:"pivot", localId:"pivot",
				structure: {
					rows: ["form", "name"], 
					columns: ["year"],
					values: [
						{ name:"oil", operation:["min","sum"]}
					],
					filters:[
						{name: "name", type: "select"}
					]
				}
			}]
		};

		return webix.require({
			"https://cdn.webix.com/pro/edge/pivot/pivot.js"	:true,
			"https://cdn.webix.com/pro/edge/pivot/pivot.css":true
		}).then(() => config);
	}

	init(){
		this.$$("pivot").parse(data);
	}
}