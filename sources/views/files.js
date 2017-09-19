import getData from "models/files";
import {JetView} from "@xbs/wjet";

export default class FMView extends JetView {
		config(){
			return {
				view:"filemanager",
				disabledHistory:true
			}
		}
		$init(view){
			view.parse(getData());
		}
}

