import {JetView} from "webix-jet";

export default class TopView extends JetView{
	config(){
		return {
			type:"space", rows:[
				{
					type:"wide",
					cols:[ { $subview:"dash.currencies" }, { $subview:"dash.progress" } ]
				},
				{ type:"wide", cols:[
					{ $subview:"dash.reviews" },
					{ type:"wide", rows:[
						{ $subview:"dash.stats" },
						{ $subview:"dash.projects" }
					]}
				]}
			]
		};
	}
}