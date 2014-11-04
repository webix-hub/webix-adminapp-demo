var ui = {};


ui.init = function(){
	// ToolBar
	webix.ui({
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
				return "<span class='webix_icon alerts fa-"+obj.icon+"'></span><span>"+obj.value+"</span>"
			}
		}

	});
	webix.ui({
		view: "popup",
		id: "searchPopup",

		width: 300,
		body:{
			rows:[
				{
					view: "search"
				},
				{
					css: "show_all", borderless:true, css: "extended_search", template: "<span>Extended search</span>", height: 40
				}
			]

		}
	});
	webix.ui({
		view: "popup",
		id: "mailPopup",
		width: 300,
		padding:0,
		css:"list_popup",
		body:{
			type: "clean",
			rows:[
				{
					view: "list",
					autoheight: true,
					data: [
						{id: 1, name: "Sofia Lee", text: "Lorem ipsum dolor sit amet.", personId:2},
						{id: 2, name: "Jeremy O'Neal", text: "Morbi eget facilisis risus.", personId:1},
						{id: 3, name: "Paul Jackson", text: "Cras lacinia bibendum arcu.", personId:1}
					],
					type:{
						height: 45,
						template: "<img class='photo' src='photos/#personId#.png' /><span class='text'>#text#</span><span class='name'>#name#</span>"

					}
				},
				{
					css: "show_all", template: "Show all emails <span class='webix_icon fa-angle-double-right'></span>", height: 40
				}
			]

		}
	});
	webix.ui({
		view: "popup",
		id: "messagePopup",
		width: 300,
		padding:0,
		css:"list_popup",
		body:{
			type: "clean",
			rows:[
				{
					view: "list",
					autoheight: true,
					data: [
						{id: 1, name: "Mario Douglas", text: "Lorem ipsum dolor sit amet", personId:1},
						{id: 2, name: "Sofia Lee", text: "Praesent luctus nulla enim, pellentesque condimentum ", personId:2},
						{id: 3, name: "Kim Alley", text: "Lorem ipsum dolor sit amet", personId:2},
						{id: 4, name: "Jeremy O'Neal", text: "Morbi eget facilisis risus", personId:1},
						{id: 5, name: "Paul Jackson", text: "Cras lacinia bibendum arcu", personId:1}
					],
					type:{
						height: 45,
						template: "	<img class='photo' src='photos/#personId#.png' /><span class='text'>#text#</span><span class='name'>#name#</span>"

					}
				},
				{
					css: "show_all", template: "Show all messages <span class='webix_icon fa-angle-double-right'></span>", height: 40
				}
			]

		}
	});
	var mainToolbar = {
		view: "toolbar",

		elements:[
			{view: "label", label: "Webix APP", width: 250},

			{ height:46, id: "person_template", css: "header_person", borderless:true, width: 180, data: {id:3,name: "Oliver Parr"},
				template: function(obj){
					var html = 	"<div style='height:100%;width:100%;' onclick='webix.$$(\"profilePopup\").show(this)'>";
					html += "<img class='photo' src='photos/"+obj.id+".png' /><span class='name'>"+obj.name+"</span>";
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

	// Menu

	var menu = {
		width: 200,

		rows:[
			{
				view: "tree",
				id: "menuTree",
				type: "menuTree",
				css: "menu",
				//activeTitle: true,
				select: true,
				tooltip: {
					template: function(obj){
						return obj.$count?"":obj.details
					}
				},
				data:[
					{id: "main", value: "Main", open: true, data:[
						{id: "dashboard", value: "Dashboard", icon: "home", $css: "dashboard", details:"reports and statistics"},
						{id: "orders", value: "Orders", icon: "check", $css: "orders", details:"order reports and editing"},
						{id: "products", value: "Products", icon: "leaf", $css: "products", details:"product reports and editing"}
					]},
					{id: "components", open: true, value:"Components", data:[
						{ id: "data", value: "Datatables", icon: "table", details: "datatable examples" },
						{ id: "charts", value: "Charts", icon: "bar-chart-o", details: "charts examples"},
						{ id: "form", value: "Forms", icon: "file-text-o", details: "form examples"},
						{ id: "windows", value: "Windows", icon: "list-alt", details: "window examples"}

					]}
				]
			}
		]

	};
	var dashboard = {

	};
	var body = {
		rows:[
			{ height: 49, id: "title", css: "title", template: "<div class='header'>#title#</div><div class='details'>( #details# )</div>", data: {text: "",title: ""}},
			{
				view: "scrollview",
				body:{
					id: "dynLayout",
					cols:[{}]
				}

			}
		]
	};

	this.layout = {
		rows:[
			mainToolbar,
			{
				cols:[
					menu,
					body
				]
			}
		]
	}
};
