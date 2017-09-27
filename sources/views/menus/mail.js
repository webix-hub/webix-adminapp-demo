const ui = {
	view: "popup",
	id: "mailPopup",
	width: 300,
	padding:0,
	css:"list_popup",
	body:{
		type: "clean",
		borderless:true,
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
					template: "<img class='photo' src='assets/imgs/photos/#personId#.png' /><span class='text'>#text#</span><span class='name'>#name#</span>"

				}
			},
			{
				css: "show_all", template: "Show all emails <span class='webix_icon fa-angle-double-right'></span>", height: 40
			}
		]
	}
};

export default ui;