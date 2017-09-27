const ui = {
	height: 136,
	css: "tiles",
	template: function(data){
		var t = null;
		var items = data.items;
		var html = "<div class='flex_tmp'>";
		for(var i=0; i < items.length; i++){
			t = items[i];
			html += "<div class='item "+t.css+"'>";
			html += "<div class='webix_icon icon fa-"+ t.icon+"'></div>";
			html += "<div class='details'><div class='value'>"+t.value+"</div><div class='text'>"+t.text+"</div></div>";
			html +=  "<div class='footer'>View more <span class='webix_icon fa-angle-double-right'></span></div>";
			html += "</div>";
		}
		html += "</div>";
		return html;
	},
	data: {
		items:[
			{id:1, text: "New Orders", value: 250, icon: "check-square-o", css: "orders"},
			{id:2, text: "New Users", value: 300, icon: "user", css: "users"},
			{id:4, text: "New Feedbacks", value: 40, icon: "quote-right", css: "feedbacks"},
			{id:3, text: "Profit", value: "+25%", icon: "line-chart", css:"profit" }
		]
	}
};

export default ui;