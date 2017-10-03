import {data} from "models/files";
import {JetView} from "webix-jet";

// load external css
webix.require("//cdn.webix.com/site/filemanager/filemanager.css");
// load external js
const ready = webix.require("//cdn.webix.com/site/filemanager/filemanager.js")
	// return UI after lib loading
	.then(() => FMView);

class FMView extends JetView {
	config(){
		return {
			view:"filemanager",
			disabledHistory:true
		};
	}
	init(view){
		view.parse(webix.copy(data));
	}
}

export default ready;