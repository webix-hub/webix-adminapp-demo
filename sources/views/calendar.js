import calendar from "views/modules/scheduler";

// load external css
webix.require("//cdn.dhtmlx.com/scheduler/edge/dhtmlxscheduler.css");
// load external js
const ready = webix.require("//cdn.dhtmlx.com/scheduler/edge/dhtmlxscheduler.js")
	.then(function(){
		// return UI after lib loading
		return {
			type: "space",
			cols:[
				calendar
			]
		};
	});

export default ready;