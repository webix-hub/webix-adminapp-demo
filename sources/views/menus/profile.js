const ui = {
	view: "submenu",
	id: "profilePopup",
	width: 200,
	padding:0,
	data: [
		{id: 1, icon: "user", value: "My Profile"},
		{id: 2, icon: "cog", value: "My Account"},
		{id: 3, icon: "calendar", value: "My Calendar"},
		{id: 5, icon: "tasks", value: "My Tasks"},
		{ $template:"Separator" },
		{id: 4, icon: "sign-out", value: "Logout"}
	],
	type:{
		template: function(obj){
			if(obj.type)
				return "<div class='separator'></div>";
			return "<span class='webix_icon alerts fa-"+obj.icon+"'></span><span>"+obj.value+"</span>";
		}
	}
};

export default ui;