import {JetView} from "webix-jet";
import {getSheetData} from "models/sheet";

export default class SheetView extends JetView{
	config(){
		const config = {
			type:"space", rows:[{
				view:"spreadsheet", localId:"sheet",
				toolbar:"full"
			}]
		};

		return webix.require({
			"https://cdn.webix.com/pro/edge/spreadsheet/spreadsheet.js":	true,
			"https://cdn.webix.com/pro/edge/spreadsheet/spreadsheet.css":	true
		}).then(() => config);
	}
	init(){
		this.$$("sheet").parse(getSheetData());
	}
}