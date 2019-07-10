import { JetView } from "webix-jet";

export default class DangerButtons extends JetView {
	config(){
		return {
			rows:[
				{ template:"Alert buttons", type:"header" },
				{
					type:"form", padding:24, margin:14, rows:[
						{ view:"button", label:"Danger", css:"webix_danger", inputWidth:100 },
						{ view:"button", label:"Danger", css:"webix_danger", type:"icon", icon:"wxi-plus", inputWidth:120 },
						{ view:"button", label:"Wide danger", css:"webix_danger", type:"icon", icon:"wxi-plus" }
					]
				}
			]
		};
	}
}