import {JetView} from "webix-jet";

export default class SheetView extends JetView{
	config(){
		const config = {
			type:"space", rows:[{
				view: "pivot",
				structure: {
					rows: ["form", "name"],
					columns: ["year"],
					values: [{ name: "oil", operation: ["min", "sum"] }],
				},
				url: "https://cdn.webix.com/demodata/pivot.json",
			}]
		};

		return webix.require({
			"https://cdn.webix.com/pro/edge/pivot/pivot.js"	:true,
			"https://cdn.webix.com/pro/edge/pivot/pivot.css":true
		}).then(() => config);
	}

}