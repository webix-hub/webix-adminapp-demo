define(["models/data_arrays"],function(data_arrays){

	var titleProgress = {
		view: "toolbar",
		css: "highlighted_header header4",
		paddingX:5,
		paddingY:5,
		height:40,
		cols:[
			{
				"template": "<span class='webix_icon fa-adjust'></span>Progress", "css": "sub_title2", borderless: true
			},
			{ view: "button", type: "iconButton", icon: "sliders", label: "Update", width: 100}
		]
	};
	var gridProgress = {
		view:"datatable",
		columns:[
			{ id:"id",	header:"",  	width:35,sort:"int"},
			{ id:"name",	header:"Task",	 fillspace:4,sort:"string"},
			{ id:"progress",	header:"Progress",  sort:"int",fillspace:2.5,	template:function(obj){
				var html = "<div class='progress_bar_element'>";
				var className = "progress_result "+(obj.type||"");
				html += "<div title='"+(parseInt(obj.progress*100,10)+"%")+"' class='"+className+"' style='width:"+(obj.progress*100+"%")+"'></div>";
				return html+"</div>";
			}},
			{ id:"num",	header:"Num, %", sort:function(a,b){

				a = a.progress;
				b = b.progress;
				return (a>b?1:(a<b?-1:0));
			}, fillspace:1.5, template:function(obj){
				return parseInt(obj.progress*100,10)+"%";
			}}
		],
		autoheight:true,
		data:data_arrays.progress
	};


	var layout = {
		type: "clean",
		rows:[
			titleProgress,
			gridProgress
		]
	};


	return { $ui: layout };

});