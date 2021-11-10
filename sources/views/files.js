import {JetView} from "webix-jet";

export default class SheetView extends JetView{
	config(){
		const config = {
			type:"space", rows:[{
				view:"filemanager",
				url:"https://docs.webix.com/filemanager-backend/"
			}]
		};

		return webix.require({
			"https://cdn.webix.com/pro/edge/filemanager/filemanager.js"	:true,
			"https://cdn.webix.com/pro/edge/filemanager/filemanager.css":true
		}).then(() => config);
	}
}