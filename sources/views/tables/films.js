import {JetView} from "webix-jet";
import {getFilms} from "models/allfilms";

export default class TransactionsView extends JetView {
	config(){
		return {
			view:"datatable", localId:"grid",
			select:true,
			columns:[
				{ id:"rank", header:"#", width:50, sort:"int" },
				{ id:"title", fillspace:1, header:"Film title", sort:"text" },
				{ id:"year", header:"Year", sort:"int" },
				{ id:"popularity", fillspace:1, header:"Popularity",
					template:webix.Sparklines.getTemplate({
						type:"splineArea",
						color:"#1CA1C1"
					}) },
				{ id:"votes", header:"Votes", sort:"int" }
			]
		};
	}
	init(grid){
		grid.parse(getFilms());
	}
}
