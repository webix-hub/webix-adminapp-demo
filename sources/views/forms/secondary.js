import { JetView } from "webix-jet";

export default class SecondaryButtons extends JetView {
	config(){
		return {
			width:-1, rows:[
				{ template:"Secondary buttons", type:"header" },
				{
					type:"form", padding:24, margin:14, rows:[
						{ view:"button", label:"Secondary", css:"webix_secondary", inputWidth:100 },
						{ view:"button", label:"Secondary", css:"webix_secondary", type:"icon", icon:"wxi-plus", inputWidth:120 },
						{ view:"button", label:"Wide secondary", css:"webix_secondary", type:"icon", icon:"wxi-plus" }
					]
				}
			]
		};
	}
}