import "../assets/theme.siberia.less";
import {JetApp} from "webix-jet";

webix.codebase = "//cdn.webix.com/components/";

webix.ready(function(){
	if(!webix.env.touch && webix.ui.scrollSize && webix.CustomScroll)
		webix.CustomScroll.init();

	var app = new JetApp({
		id:			"admin-demo",
		name:		"Webix Admin",
		version:	"1.0",
		start:		"/app/dashboard"
	});

	app.attachEvent("app:error:resolve", function(name, err){
		window.console.error(err);
		webix.delay(() => this.show("/app/dashboard"));
	});
	app.render();
});

//track js errors
if (PRODUCTION){
	window.Raven
		.config(
			"https://59d0634de9704b61ba83823ec3bf4787@sentry.webix.io/12",
			{ release: VERSION }
		)
		.install();
}