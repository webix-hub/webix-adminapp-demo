import "./styles/app.css";
import {JetApp} from "webix-jet";

export default class InventoryApp extends JetApp {
	constructor(config){
		super(webix.extend({
			id:			APPNAME,
			version:	VERSION,
			start:		"/main/dash",
			debug:		!PRODUCTION
		}, config, true));

		/* error tracking */
		this.attachEvent("app:error:resolve", function(name, error){
			window.console.error(error);
		});	
	}
}