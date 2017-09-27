import {JetView} from "webix-jet";
import {progress} from "models/data_arrays";

export default class DataProgressView extends JetView{
	config(){
		return layout;
	}
	init(view){
		view.queryView({ view:"datatable" }).parse(progress);
	}
}

const titleProgress = {
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
const gridProgress = {
	view:"datatable",
	columns:[
		{ id:"id",	header:"",  	width:35,sort:"int"},
		{ id:"name",	header:"Task",	 fillspace:4,sort:"string"},
		{ id:"progress",	header:"Progress",  sort:"int",fillspace:2.5,	template:function(obj){
			let html = "<div class='progress_bar_element'>";
			let className = "progress_result "+(obj.type||"");
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
	autoheight:true
};


const layout = {
	type: "clean",
	rows:[
		titleProgress,
		gridProgress
	]
};