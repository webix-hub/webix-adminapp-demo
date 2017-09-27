import {JetView} from "webix-jet";
import {data} from "models/products";

export default class SearchView extends JetView{
	config(){
		return layout;
	}
	init(view){
		view.queryView({ view:"list" }).parse(data);
	}
}


const layout = {
	rows:[
		{
			view: "form",

			paddingX:5,
			paddingY:5,
			margin: 2,
			rows:[
				{view: "label",label: "Find product:"},
				{view: "search"}
			]
		},
		{
			view: "list",
			id: "list",
			select: true,
			template: "<div class='marker status#status#'></div>#code# / #name#"
		}
	]
};