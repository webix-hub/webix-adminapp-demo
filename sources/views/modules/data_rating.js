define(["models/data_arrays"],function(data_arrays){

	var titleRating = {

		view: "toolbar",
		css: "highlighted_header header1",
		paddingX:5,
		paddingY:5,
		height:40,
		cols:[
			{
				"template": "<span class='webix_icon fa-star-o'></span>Rating", "css": "sub_title2", borderless: true
			},
			{view: "button", type: "iconButton", icon:"refresh",width:100, label: "Refresh"}
		]
	};

	var gridRating = {
		view:"datatable",
		columns:[
			{ id:"id", header:"", sort:"int",width: 35},
			{ id:"name",	header:"Procut", fillspace:4,  sort:"string"},
			{ id:"code",	header:"Code", sort:"string",fillspace:2},
			{ id:"rating",	header:"Rating", sort:"int", fillspace:2, minWidth:80,
				template:function(obj){
					var html = "<div class='rating_bar_element star"+obj.rating+"'>";

					for (var i=1; i<6; i++)
						html+="<div title='"+i+"' class='rating_star star"+i+"' style='left:"+(i*16 - 16)+"px'></div>";

					return html+"</div>";
				}
			}
		],
		onClick:{
			rating_star:function(ev, id, html){
				this.getItem(id.row)[id.column] = (ev.target||ev.srcElement).getAttribute("title");
				this.updateItem(id.row);
			}
		},
		autoheight: true,
		scheme:{
			$init:function(obj){ obj.index = this.count(); }
		},
		data:data_arrays.rating
	};


	var layout = {
		type: "clean",
		rows:[
			titleRating,
			gridRating
		]
	};

	return { $ui: layout };

});