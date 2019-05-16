import { JetView } from "webix-jet";
import { getStats } from "models/stats";

function openSearch(){
	this.config.icon = (this.config.icon == "wxi-close") ? "mdi mdi-magnify" : "wxi-close";
	const input = this.$scope.$$("srch:field");
	input.isVisible() ? input.hide() : input.show();
	const header = this.$scope.$$("header");
	header.isVisible() ? header.hide() : header.show();
	this.refresh();
}

export default class StatsView extends JetView {
	config(){
		return {
			height: 209, rows:[
				{ view:"toolbar", height:48, padding:{ right:8 }, elements:[
					{ template:"Revenues", type:"header", borderless:true, localId:"header" },
					{
						view:"text", localId:"srch:field", placeholder:"Type to search by name", hidden:true,
						on:{
							onViewShow(){
								const self = this;
								webix.delay(function(){ self.focus(); });
							},
							onTimedKeyPress(){
								const input = this.getValue().toLowerCase();
								this.$scope.$$("list").filter(obj => obj.value.toLowerCase().indexOf(input) !== -1);
							}
						}
					},
					{ view:"icon", icon:"mdi mdi-magnify", click:openSearch }
				]},
				{
					view:"list", localId:"list", css:"stats",
					type:{
						height:"auto",
						template: obj => `<span class="title">${obj.value}</span>
						<div class='progress_bar_element'>
						<div class='progress_result ${obj.type||""}' style='width:${obj.number/10*2+"%"}'></div>
						</div>`
					}
				}
			]
		};
	}
	init(){
		this.$$("list").parse(getStats());
	}
}