import {JetView} from "webix-jet";

export default class FormsView extends JetView{
	config(){
		return {
			view:"scrollview", scroll:"xy", body:{
				type:"space", cols:[
					{
						type:"wide", width:500, rows:[
							{ $subview:"forms.car" },
							{ $subview:"forms.checkboxes" }
						]
					},
					{
						type:"wide", rows:[
							{ $subview:"forms.person" },
							{
								type:"wide", cols:[
									{ $subview:"forms.primary" },
									{ $subview:"forms.secondary" },
									{ $subview:"forms.danger" },
								]
							}
						]
					}
				]
			}
		};
	}
}