define(["views/webix/scheduler"], function(){

return {
	$ui:{
		rows:[
			{ "template": "<span class='webix_icon fa-calendar'></span>Calendar", type:"header", "css": "sub_title", "height": 50 },
			{ view:"dhx-scheduler",
				date:new Date(),
				height: 550,
				mode:"month",
				tabs:["day", "month"],
				init:function(){
					scheduler.config.month_day_min_height = 50;
					scheduler.config.xml_date="%Y-%m-%d %H:%i";
					scheduler.config.first_hour = 8;
					scheduler.config.week_ = 8;
					scheduler.config.last_hour = 18;
					scheduler.config.multi_day = false;
				},
				ready:function(){
					scheduler.parse("<data><event id='1261150506' start_date='2010-01-01 18:00' end_date='2010-01-03 18:00' text='Sister Act' details='Palladium' /><event id='1261150507' start_date='2010-01-02 07:00' end_date='2010-01-02 09:00' text='Cat On a Hot Tin Roof' details='Novello Theatre' /><event id='1261150508' start_date='2010-01-02 07:00' end_date='2010-01-02 09:00' text='Grease' details='Piccadilly Theatre' /><event id='1261150509' start_date='2010-01-03 17:00' end_date='2010-01-03 19:00' text='Ladbrokes.com World Darts Championships' details='Alexandra Palace' /><event id='1261150510' start_date='2010-01-05 14:00' end_date='2010-01-05 16:00' text='Calendar Girls' details='Noel Coward Theatre' /><event id='1261150511' start_date='2010-01-06 08:00' end_date='2010-01-08 08:00' text='Dirty Dancing' details='Aldwych Theatre' /><event id='1261150512' start_date='2010-01-07 15:00' end_date='2010-01-07 17:00' text='Cirque du Soleil Varekai' details='Royal Albert Hall' /><event id='1261150513' start_date='2010-01-08 15:00' end_date='2010-01-08 17:00' text='Grease' details='Piccadilly Theatre' /><event id='1261150514' start_date='2010-01-09 09:00' end_date='2010-01-09 11:00' text='The Lion King' details='Lyceum Theatre' /><event id='1261150515' start_date='2010-01-09 07:00' end_date='2010-01-09 09:00' text='Cirque du Soleil Varekai' details='Royal Albert Hall' /><event id='1261150516' start_date='2010-01-10 10:00' end_date='2010-01-12 10:00' text='Cirque du Soleil Varekai' details='Royal Albert Hall' /><event id='1261150517' start_date='2010-01-12 09:00' end_date='2010-01-12 11:00' text='Masters Snooker 2010      Afternoon session' details='Wembley Arena' /></data>");

				}}
		]
	}
};


});