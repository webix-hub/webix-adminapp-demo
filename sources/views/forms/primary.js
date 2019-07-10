import { JetView } from "webix-jet";

export default class PrimaryButtons extends JetView {
	config(){
		return {
			rows:[
				{ template:"Primary buttons", type:"header" },
				{
					type:"form", padding:24, margin:14, rows:[
						{ view:"button", label:"Primary", css:"webix_primary", inputWidth: 100},
						{ view:"button", label:"Primary", css:"webix_primary", type:"icon", icon:"wxi-plus", inputWidth: 140},
						{ view:"button", label:"Wide primary", css:"webix_primary", type:"icon", icon:"wxi-plus" }
					]
				}
			]
		};
	}
}