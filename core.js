var app = {
	init:function(){
		if(!webix.env.touch && webix.ui.scrollSize)
			webix.CustomScroll.init();
		ui.init();
		webix.ui(ui.layout);

		this.setEventHandlers();
		webix.$$("menuTree").select("dashboard");
	},
	setEventHandlers: function(){
		webix.$$("menuTree").attachEvent("onBeforeSelect", function(id){
			return !this.getItem(id).$count;
		});
		webix.$$("menuTree").attachEvent("onAfterSelect", function(id){
			var item = this.getItem(id);
			webix.$$("title").parse({title: item.value, details: item.details});
			if(!$$("title").showProgress){
				webix.extend($$("title"),webix.ProgressBar);
			}
			$$("title").showProgress({
				type:"top",
				delay:250,
				hide:false
			});
			webix.ajax("pages/"+id+".js?s="+(new Date()).valueOf(), function(data){
				var data = webix.DataDriver.json.toObject(data);
				webix.ui(data,$$("dynLayout"));
				$$("title").hideProgress();
			});
		});
	}
};
