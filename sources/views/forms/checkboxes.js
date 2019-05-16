import { JetView } from "webix-jet";

export default class Checkboxes extends JetView {
	config(){
		return {
			width:400, rows:[
				{ template:"Checkbox", type:"header" },
				{
					type:"form", padding:24, margin:30, cols:[
						{
							margin:14, rows:[
								{ view:"checkbox", labelRight:"Checked", labelWidth:0, value:1 },
								{ view:"checkbox", labelRight:"Unchecked", labelWidth:0 },
								{ view:"checkbox", labelRight:"Disabled", labelWidth:0, disabled:true }
							]
						},
						{
							view:"radio", value:1, css:"radio_demo", options:[
								{ id:1, value:"Checked" },
								{ id:2, value:"Unchecked" }
							],
							on:{
								onChange(newV, oldV){
									if (newV == 3) this.setValue(oldV);
								}
							}
						}
					]
				}
			]
		};
	}
}