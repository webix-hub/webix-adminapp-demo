import { JetView } from "webix-jet";
import { getReviews } from "models/reviews";

function openSearch(){
	this.config.icon = (this.config.icon == "wxi-close") ? "mdi mdi-magnify" : "wxi-close";
	const input = this.$scope.$$("srch:field");
	input.isVisible() ? input.hide() : input.show();
	const header = this.$scope.$$("header");
	header.isVisible() ? header.hide() : header.show();
	this.refresh();
}

export default class ReviewsView extends JetView {
	config(){
		const dateFormat = webix.Date.dateToStr("%j %M %Y");
		return {
			gravity: 1.25,
			rows:[
				{
					view:"toolbar", height:48, padding:{ right:8 }, elements:[
						{ template:"Customer feedback", type:"header", borderless:true, localId:"header" },
						{
							view:"text", localId:"srch:field", placeholder:"Type to search by name", hidden:true,
							on:{
								onViewShow(){
									const self = this;
									webix.delay(function(){ self.focus(); });
								},
								onTimedKeyPress(){
									const input = this.getValue().toLowerCase();
									this.$scope.$$("list").filter(obj => obj.name.toLowerCase().indexOf(input) !== -1);
								}
							}
						},
						{ view:"icon", icon:"mdi mdi-magnify", click:openSearch }
					]
				},
				{
					view:"list", localId:"list", css:"reviews",
					type:{
						height:168,
						stars:(obj) => {
							let result = "";
							for (let i = 1; i <= 5; i++){
								let color = (i <= obj.stars) ? "gold" : "grey";
								result += `<span class='webix_icon mdi mdi-star star ${color} ${i}'></span>`;
							}
							return "<span class='stars'>" + result + "</span>";
						},
						template:(obj,common) => `
							<div class="img"><img src="data/images/${obj.photo}.jpg" /></div>
							<div class="text">
								<span class="webix_icon mdi mdi-bookmark-${obj.mark?"check":"plus"} mark"></span>
								<span class="name">${obj.name}</span>
								${common.stars(obj)}
								<span class="date">${dateFormat(obj.date)}</span>
								<span class="message">${obj.text}</span>
								<span class="tag ${obj.tag}">${obj.tag}</span>
							</div>
						`
					},
					tooltip:{
						template:"#text#", css:"review_tooltip"
					},
					onClick:{
						"mark":function(e,i){
							const old = this.getItem(i).mark;
							this.updateItem(i,{ mark:!old });
							return false;
						}
					}
				}
			]
		};
	}
	init(){
		this.$$("list").parse(getReviews());
	}
}