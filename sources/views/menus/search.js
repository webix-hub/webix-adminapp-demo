const ui = {
	view: "popup",
	id: "searchPopup",

	width: 300,
	body:{
		rows:[
			{
				view: "search"
			},
			{
				borderless:true, css: "extended_search", template: "<span>Extended search</span>", height: 40
			}
		]
	}
};

export default ui;