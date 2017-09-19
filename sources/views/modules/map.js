define(["views/webix/googlemap"], function(){

	var map = {
		rows:[
			{
				template:"<span class='webix_icon fa-map-marker'></span>Events Map" , type:"header", "css": "sub_title", "height": 50
			},
			{
				view:"google-map",
				id:"map",
				zoom:3,
				center:[ 48.724, 8.215 ]
			}
		]
	};

	return { $ui:map };

});