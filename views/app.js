define([
	"views/menus/search",
	"views/menus/mail",
	"views/menus/message",
	"views/menus/profile",
	"views/menus/sidebar",
	"views/webix/icon",
	"views/webix/menutree"
],function(search, mail, message, profile, menu){

	//Top toolbar
	var mainToolbar = {
		view: "toolbar",
		
		elements:[
			{view: "label", label: "<a href='http://webix.com'><img class='photo' src='assets/imgs/logo.png' /></a>", width: 200},

			{ height:46, id: "person_template", css: "header_person", borderless:true, width: 180, data: {id:3,name: "Oliver Parr"},
				template: function(obj){
					var html = 	"<div style='height:100%;width:100%;' onclick='webix.$$(\"profilePopup\").show(this)'>";
					html += "<img class='photo' src='assets/imgs/photos/"+obj.id+".png' /><span class='name'>"+obj.name+"</span>";
					html += "<span class='webix_icon fa-angle-down'></span></div>";
					return html;
				}
			},
			{},
			{view: "icon", icon: "search",  width: 45, popup: "searchPopup"},
			{view: "icon", icon: "envelope-o", value: 3, width: 45, popup: "mailPopup"},
			{view: "icon", icon: "comments-o", value: 5, width: 45, popup: "messagePopup"}
		]
	};

	var body = {
		rows:[
			{ height: 49, id: "title", css: "title", template: "<div class='header'>#title#</div><div class='details'>( #details# )</div>", data: {text: "",title: ""}},
			{
				view: "scrollview", scroll:"native-y",
				body:{ cols:[{ $subview:true}] }
			}
		]
	};

	var layout = {
		rows:[
			mainToolbar,
			{
				cols:[
					menu,
					body
				]
			}
		]
	};

	return {
		$ui:layout,
		$menu:"app:menu",
		$oninit:function(view, scope){
			scope.ui(search.$ui);
			scope.ui(mail.$ui);
			scope.ui(message.$ui);
			scope.ui(profile.$ui);
		}
	};
	
});