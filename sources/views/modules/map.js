const map = {
	rows:[
		{
			template:"<span class='webix_icon fa-map-marker'></span>Events Map" , type:"header", "css": "sub_title", "height": 50
		},
		{
			view:"google-map",
			id:"map",
			// provide your own Google API key
			// https://developers.google.com/maps/documentation/javascript/get-api-key
			key:"AIzaSyAi0oVNVO-e603aUY8SILdD4v9bVBkmiTg",
			zoom:3,
			center:[ 48.724, 8.215 ]
		}
	]
};

export default map;