// icon button with count marker
webix.protoUI({
	name:"icon",
	$skin:function(){
		this.defaults.height = webix.skin.$active.inputHeight;
	},
	defaults:{
		template:function(obj){
			var html = "<button style='height:100%;width:100%;line-height:"+obj.aheight+"px' class='webix_icon_button'>";
			html += "<span class='webix_icon fa-"+obj.icon+"'></span>";
			if(obj.value)
				html += "<span class='webix_icon_count'>"+obj.value+"</span>";
			html += "</button>";
			return html;
		},
		width:33
	},
	_set_inner_size:function(){

	}
}, webix.ui.button);