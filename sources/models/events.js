var weekStart = webix.Date.weekStart(new Date());
var monthStart = webix.Date.monthStart(new Date());
var day = webix.Date.dayStart(new Date());
var day2 = webix.Date.add(webix.Date.copy(day),1,"month",true);

var monthStart2 = webix.Date.add(webix.Date.copy(monthStart),1,"month",true);
var weekStart2 = webix.Date.add(webix.Date.copy(weekStart),1,"month",true);
var weekStart1 = webix.Date.add(webix.Date.copy(weekStart),-1,"month",true);

export const data = [
	{
		id:1,
		start_date: webix.Date.copy(weekStart),
		end_date:   webix.Date.add(webix.Date.copy(weekStart),3,"day",true),
		text:   "Conference",
		calendar: "company"
	},
	{
		id:2,
		start_date: webix.Date.copy(monthStart),
		end_date:   webix.Date.add(webix.Date.copy(monthStart),2,"day",true),
		text:   "Partners meeting",
		calendar: "company"
	},

	{
		id:3,
		start_date: webix.Date.add(webix.Date.copy(monthStart),15,"day",true),
		end_date:   webix.Date.add(webix.Date.copy(monthStart),17,"day",true),
		text:   "Webix project",
		calendar: "company"
	},
	{
		id:4,
		start_date: webix.Date.add(webix.Date.copy(monthStart),18,"day",true),
		end_date:   webix.Date.add(webix.Date.copy(monthStart),22,"day",true),
		text:   "Conference"
	},
	{
		id:5,
		start_date:  webix.Date.add(day,9,"hour",true),
		end_date:   webix.Date.add(day,11,"hour",true),
		text:   "Meeting",
		calendar: "company"
	},
	{
		id:6,
		start_date:  webix.Date.add(weekStart,18,"hour",true),
		end_date:   webix.Date.add(weekStart,23,"hour",true),
		text:   "Birthday party"
	},
	{
		id:7,
		start_date: webix.Date.add(webix.Date.copy(monthStart),-2,"day",true),
		end_date:   webix.Date.add(webix.Date.copy(monthStart),3,"day",true),
		text:   "Football championship"
	},
	{
		id:8,
		start_date:  webix.Date.add(weekStart1,19,"hour",true),
		end_date:   webix.Date.add(weekStart1,23,"hour",true),
		text:   "Birthday party"
	},
	{
		id:9,
		start_date:  webix.Date.add(day2,9,"hour",true),
		end_date:   webix.Date.add(day2,11,"hour",true),
		text:   "Meeting",
		calendar: "company"
	},
	{
		id:10,
		start_date:  webix.Date.add(weekStart2,20,"hour",true),
		end_date:   webix.Date.add(weekStart2,23,"hour",true),
		text:   "Birthday party"
	},
	{
		id:11,
		start_date: webix.Date.add(webix.Date.copy(monthStart2),24,"day",true),
		end_date:   webix.Date.add(webix.Date.copy(monthStart2),28,"day",true),
		text:   "Conference",
		calendar: "company"
	},
	{
		id:12,
		start_date: webix.Date.add(webix.Date.copy(monthStart),26,"day",true),
		end_date:   webix.Date.add(webix.Date.copy(monthStart),28,"day",true),
		text:   "Football championship"
	}
];