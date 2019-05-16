import { JetView } from "webix-jet";
import { getProgress, shuffle } from "../../models/progressch";

function openSearch(){
	this.config.icon = (this.config.icon == "wxi-close") ? "mdi mdi-magnify" : "wxi-close";
	const input = this.$scope.$$("srch:field");
	input.isVisible() ? input.hide() : input.show();
	const header = this.$scope.$$("header");
	header.isVisible() ? header.hide() : header.show();
	this.refresh();
}

export default class ProgressView extends JetView {
	config(){
		return {
			rows:[
				{ type:"toolbar", height:48, padding:{ right:8 }, cols:[
					{ template:"2018 year stats", type:"header", borderless:true, localId:"header" },
					{
						view:"text", localId:"srch:field", placeholder:"Type to filter values above (e.g. 30)", hidden:true,
						on:{
							onViewShow(){
								const self = this;
								webix.delay(function(){ self.focus(); });
							},
							onTimedKeyPress(){
								const input = parseInt(this.getValue());
								if (!isNaN(input)){
									this.$scope.$$("chart").filter(obj => obj.a > input);
								}
								else {
									this.$scope.$$("chart").filter();
								}
							}
						}
					},
					{ view:"icon", icon:"mdi mdi-magnify", click:openSearch },
				]},
				{
					view:"chart", type:"stackedBar", localId:"chart",
					yAxis:{ template:"", lineColor:"#fff", color:"#fff" },
					xAxis:{ lineColor:"#fff", color:"#fff", template:"" },
					series:[
						{
							value:"#a#",
							color: "#1CA1C1",
							tooltip:{
								template:"#a#"
							}
						},
						{
							value:"#b#",
							color: "#EBEDF0",
							tooltip:{
								template:"#b#"
							}
						}
					],
					padding:{ left:30, bottom:30 }, barWidth:24
				}
			]
		};
	}
	init(){
		this.$$("chart").parse(getProgress());

		this.on(this.app, "currency:select",(id) => {
			if (!this.ListId || this.ListId !== id){
				this.$$("chart").clearAll();
				this.$$("chart").parse(shuffle());
				this.ListId = id;
			}
		});
	}
}