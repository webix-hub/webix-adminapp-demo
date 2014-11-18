define(["views/webix/scheduler","models/events"], function(sch,events){
var addEvents = function(){
	scheduler.parse(events.data,"json");
};
return {
	$ui:{
		minWidth: 500,
		gravity: 2,
		rows:[
			{
				type: "wide",
				cols:[
				{

					width: 240,

					rows:[
						{view: "calendar", on:{
							onDateSelect: function(date){
								scheduler.updateView(date,"week");
							}
						}},

						{
							view: "form",
							rows:[
								{view: "list", id:"calendarList", borderless: true, css: "calendar_list", autoheight:true, template: "<div><span class='calendar_icon #id#'></span>#name#</div>", data:[
										{id: "my", name: "My Calendar", active: true},
										{id: "company", name: "Webix Project", active: true}
									],
									on:{
										onItemClick: function(calendarId){
											var item = this.getItem(calendarId);
											item.active = !item.active;
											item.$css =  (item.active?"":"disabled");
											this.refresh(calendarId);
											scheduler.updateView();
										}
									}
								},
								{ view: "button", label:"Add new calendar",align:"left"},
								{}
							]
						}

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
						var d = scheduler.date.date_to_str;
						var week1 = d("%d");
						var week2 = d("%d %M %y");
						scheduler.filter_day = scheduler.filter_week = scheduler.filter_month = function(id, event){
							var calendar = event.calendar;
							if(!calendar)
								return $$("calendarList").getItem("my").active;
							else
								return $$("calendarList").getItem(calendar).active;
						};
						scheduler.templates.week_scale_date = d("%D, %W/%j");
						scheduler.templates.week_date = function(d1,d2){
							return week1(d1)+" &ndash; "+ week2(scheduler.date.add(d2,-1,"day"));
						}
					},
					ready:function(){
						if(addEvents){
							addEvents();
							addEvents = null;
						}

					}
				}
			]}
		]
	}
};
});