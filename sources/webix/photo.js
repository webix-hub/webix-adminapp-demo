webix.protoUI({
	name:"photo",
	getValue(){
		return this.config.value;
	},
	setValue(value){
		this.setHTML("<img style='height:260px;' webix_tooltip='The image of the Client' src='data/images/"+value+".jpg'>");
		this.config.value = value;
	}
},
webix.ui.template);
