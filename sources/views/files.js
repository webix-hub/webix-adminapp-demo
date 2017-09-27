import {data} from "models/files";
import {JetView} from "webix-jet";

export default class FMView extends JetView {
		config(){
			return {
				view:"filemanager",
				disabledHistory:true
			}
		}
		init(view){
			view.parse(webix.copy(data));
		}
}

