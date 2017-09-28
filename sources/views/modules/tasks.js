const tasks = { 
	rows:[
		{
			template: "<span class='webix_icon fa-tasks'></span>Pending Tasks", type:"header", "css": "sub_title", "height": 50
		},
		{
			view: "list",
			css: "tasks_list",
			autoheight: true,
			type: {

				marker: function(obj){
					return "<span class='webix_icon_btn fa-bell-o marker "+obj.type+"' style='max-width:32px;' ></span>";
				},
				check:  webix.template("<span class=\"webix_icon_btn fa-{obj.$check?check-:}square-o list_icon\" style=\"max-width:32px;\"></span>"),
				template: function(obj,type){
					return "<div class='"+(obj.$check?"done":"")+"'>"+type.check(obj,type)+"<span class='list_text'>"+obj.text+"</span><span class='marker "+obj.type+"'>"+(obj.type||"")+"</span></div>";
				}
			},
			data: [
				{ id: "1", text: "Prepare finance report"},
				{ id: "2", text: "Solex project strategy  meeting", type: "projects"},
				{ id: "3", text: "WestEurope partners call"},
				{ id: "4", text: "Prepare presentation for summer conference", type: "company"},
				{ id: "5", text: "Market research analysis"},
				{ id: "6", text: "Check messages"},
				{ id: "7", text: "Discussing new theme for website", type: "company"}
			],
			on: {
				onItemClick:function(id){
					var item = this.getItem(id);
					item.$check = !item.$check;
					this.refresh(id);
				}
			}
		},
		{
			css: "show_all bg", template: "Show all tasks <span class='webix_icon fa-angle-double-right'></span>", height: 40
		}
	]
};

export default tasks;