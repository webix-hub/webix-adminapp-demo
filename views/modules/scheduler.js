define(["views/webix/scheduler"], function(){
var addEvents = function(){
	var weekStart = webix.Date.weekStart(new Date());
	var monthStart = webix.Date.monthStart(new Date());
	var today = webix.Date.dayStart(new Date());

	scheduler.addEvent({
		start_date: webix.Date.copy(weekStart),
		end_date:   webix.Date.add(webix.Date.copy(weekStart),3,"day",true),
		text:   "Conference"
	});
	scheduler.addEvent({
		start_date: webix.Date.copy(monthStart),
		end_date:   webix.Date.add(webix.Date.copy(monthStart),2,"day",true),
		text:   "Partners meeting",
		calendar: "other"
	});
	scheduler.addEvent({
		start_date: webix.Date.add(webix.Date.copy(monthStart),15,"day",true),
		end_date:   webix.Date.add(webix.Date.copy(monthStart),17,"day",true),
		text:   "Webix project",
		calendar: "other"
	});
	scheduler.addEvent({
		start_date: webix.Date.add(webix.Date.copy(monthStart),14,"day",true),
		end_date:   webix.Date.add(webix.Date.copy(monthStart),18,"day",true),
		text:   "Webix project"
	});
	scheduler.addEvent({
		start_date:  webix.Date.add(today,9,"hour",true),
		end_date:   webix.Date.add(today,11,"hour",true),
		text:   "Meeting",
		calendar: "other"
	});
	scheduler.addEvent({
		start_date:  webix.Date.add(weekStart,19,"hour",true),
		end_date:   webix.Date.add(weekStart,23,"hour",true),
		text:   "Birthday party"
	});
};
return {
	$ui:{
		minWidth: 500,
		gravity: 2,
		rows:[
			{ "template": "<span class='webix_icon fa-calendar'></span>Calendar", type:"header", "css": "sub_title", "height": 50 },
			{
				cols:[
				{
					view: "form",
					width: 180,
					rows:[
						{ view:"label",label: "<div><span class='calendar_icon'></span>My Calendar</div>",height: 35},
						{view:"label",label: "<div><span class='calendar_icon other'></span>Webix Project</div>",height: 35},
						{ view: "button", label:"Add new calendar",align:"left"},
						{}
					]
				},
				{
					view:"dhx-scheduler",
					date:new Date(),

					mode:"month",
					tabs:["day","week", "month"],
					init:function(){
						//scheduler.config.month_day_min_height = 50;
						scheduler.config.xml_date="%Y-%m-%d %H:%i";
						scheduler.config.first_hour = 7;
						scheduler.config.last_hour = 24;
						scheduler.config.multi_day = true;
						scheduler.templates.event_class=function(s,e,ev){ return ev.calendar?"other":""; };
					},
					ready:function(){
						addEvents();
						addEvents = null;
					}
				}
			]}
		]
	}
};
});