var header = {
	"template": "<span class='webix_icon fa-comments-o'></span>Messages", "css": "sub_title", "height": 50
};

var list = {
	"view": "list",
	css: "chat_list",
	maxHeight: 300,
	minHeight: 250,
	"type": {
		"height": "auto",
		"template": function(obj){
			var text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. ";
			var html = 	"<img class='photo' src='assets/imgs/photos/"+obj.personId+".png' />";
			html += "<div class='text'><div class='name'>"+obj.name+"<div class='time'>"+obj.time+"</div></div>";
			html += text+"</div>";
			return html;
		}
	},
	"data": [
		{ id: 1,  personId: 1, time:"Just now", name: "Peter Johnson"},
		{ id: 2,  personId: 2, time:"Just now", name: "Vera Liu"},
		{ id: 3, personId: 1, time:"11:40", name: "Peter Johnson"},
		{ id: 4, personId: 2, time:"11:30", name: "Vera Liu"},
		{ id: 5, personId: 1, time:"10:10", name: "Peter Johnson"},
		{ id: 6, personId: 2, time:"9:50", name: "Vera Liu"}
	]
};

var form = {
	view: "form",
	css: "show_all",
	paddingX: 10,
	paddingY: 2,

	cols:[
		{
			view: "text", placeholder: "Type a message here",height:36
		},
		{
			view: "icon", icon: "search",height:36
		}
	]
};


const layout = {
	type: "clean",
	rows:[
		header,
		{ rows:[ list, form ] }
	]
};

export default layout;