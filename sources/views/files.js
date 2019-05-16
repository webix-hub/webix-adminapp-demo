import {JetView} from "webix-jet";
import {data} from "models/files";

export default class SheetView extends JetView{
	config(){
		const config = {
			type:"space", rows:[{
				view:"filemanager", localId:"files",
				disabledHistory:true
			}]
		};

		return webix.require({
			"https://cdn.webix.com/pro/edge/filemanager/filemanager.js"	:true,
			"https://cdn.webix.com/pro/edge/filemanager/filemanager.css":true
		}).then(() => config);
	}

	init(){
		this.$$("files").parse(webix.copy(data));
	}
}