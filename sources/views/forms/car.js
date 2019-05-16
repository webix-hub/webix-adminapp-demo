import {JetView} from "webix-jet";
import "webix/photo";

function getCar(form){
	webix.delay(() => {
		const make = form.elements["make"].getValue();
		const model = form.elements["model"].getValue();
		form.elements["photo"].setValue(make+"_"+model);
	});
}

export default class CarView extends JetView {
	config(){
		const dateFormat = webix.Date.dateToStr("%d %M %Y");

		return {
			rows:[
				{ template:"Vehicle sale", type:"header" },
				{
					view:"form", localId:"form", padding:24,
					elementsConfig:{ labelAlign:"right", labelWidth:100 },
					rows:[
						{
							view:"photo", localId:"photo",
							name:"photo",
							css:"form_photo",
							height:260,
							borderless:true
						},
						{
							view:"richselect", name:"make", label:"Make",
							placeholder:"Click to select", options:[
								{ id:"transtar", value:"Transtar" },
								{ id:"kasma", value:"Kasma" },
								{ id:"typhon", value:"Typhon&Co" }
							],
							on:{
								onChange:() => getCar(this.$$("form"))
							}
						},
						{
							view:"richselect", name:"model", label:"Model",
							placeholder:"Click to select",
							options:[
								{ id:"coral", value:"Coral AF-13B72P" },
								{ id:"thalos", value:"Thalos RD-D7N0H8" },
								{ id:"pytheas", value:"Pytheas RY-1M4L1VE" }
							],
							on:{
								onChange:() => getCar(this.$$("form"))
							}
						},
						{
							view:"datepicker", label:"Produced", name:"produced",
							placeholder:"Click to select", format:dateFormat
						},
						{
							view:"colorpicker", label:"Color", name:"color",
							value:"green"
						},
						{
							view:"radio", options:[ "Agree", "Disagree" ], label:"Notifications",
							name:"notifications", value:"Agree"
						},
						{
							view:"textarea", label:"Notes", name:"notes", placeholder:"Type text"
						}
					]
				}
			]
		};
	}
	init(){
		this.$$("form").setValues({
			make:"kasma", model:"coral", produced:"2056-05-05",
			color:"#DD0000", notifications:"Agree"
		});
	}
}
