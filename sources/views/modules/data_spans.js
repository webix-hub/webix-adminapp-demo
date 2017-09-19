define(["models/data_arrays"],function(data_arrays){

	var titleGroup = {
		view: "toolbar",
		css: "highlighted_header header2",
		paddingX:5,
		paddingY:5,
		height:40,
		cols:[
			{
				"template": "<span class='webix_icon fa-arrows-v'></span>Spans", "css": "sub_title2", borderless: true
			},
			{ view: "icon", icon: "refresh",width: 40}

		]
	};
	var gridGroup = {
		view:"datatable",
		columns:[
			{ id:"region",	header:"Region", fillspace: 1 },
			{ id:"name", 	header:"Product", fillspace: 2},
			{ id:"code",	header:"Code" , fillspace: 1 ,tooltip: "", editor:"text"},
			{ id:"sales",	header:"Sales", fillspace: 1 }
		],
		spans:true,
		autoheight:true,
		select:"cell",
		data:data_arrays.colspans
	};


	var layout = {
		type: "clean",
		rows:[
			titleGroup,
			gridGroup
		]
	};

	return { $ui: layout };

});