import {JetView} from "webix-jet";

export default class ChartsView extends JetView{
	config(){
		return {
			view:"scrollview", body:{
				type:"space",
				rows:[
					{
						type:"wide", cols:[
							{ $subview:"charts.time" },
							{ $subview:"charts.progress" }
						]
					},
					{
						$subview:"charts.statistics"
					},
					{
						type:"wide", cols:[
							{ $subview:"charts.geo" },
							{ $subview:"charts.compare" }
						]
					}
				]
			}
		};
	}
}