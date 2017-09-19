import "../assets/theme.siberia.less";
import {JetApp} from "@xbs/wjet";

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
	// app.use(Locale);
	// app.use(Theme);

	app.attachEvent("app:error:resolve", function(){
		webix.delay(() => this.show("/app/dashboard"));
	})
	app.render();
});