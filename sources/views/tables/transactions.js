import {JetView} from "webix-jet";
import {allpayments} from "models/allpayments";

export default class TransactionsView extends JetView {
	config(){
		return {
			view:"datatable", localId:"grid",
			select:true, tooltip:true,
			columns:[
				{
					id:"date", header:"Date",
					fillspace:1, minWidth:100,
					sort:"date", format:webix.Date.dateToStr("%j %F")
				},
				{
					id:"method", header:"Payment", fillspace:1, minWidth:90, sort:"text",
					tooltip:"The card with which the payment was made",
					template:data => `<img class="method" src="data/images/${data.method}.svg" />`
				},
				{
					id:"", header:"", fillspace:3, template:"#method# #number#"
				},
				{
					id:"name", header:{
						text:"Purchase",
						tooltip:"Click to sort the list by shops"
					},
					fillspace:4, minWidth:200, sort:"text"
				},
				{
					id:"sum", header:"Sum", sort:"int",
					fillspace:1.5, minWidth:90,
					format:webix.i18n.priceFormat
				}
			]
		};
	}
	init(grid){
		grid.sync(allpayments);
	}
}
