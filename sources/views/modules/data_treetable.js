import {JetView} from "webix-jet";
import {treetable} from "models/data_arrays";

export default class DataTreeTableView extends JetView{
	config(){
		return layout;
	}
	init(view){
		view.queryView({ view:"treetable" }).parse(webix.copy(treetable));
	}
}



const titleTree = {
	view: "toolbar",
	css: "highlighted_header header3",
	paddingX:5,
	paddingY:5,
	height:40,
	cols:[
		{
			"template": "<span class='webix_icon fa-folder-o'></span>Treetable", "css": "sub_title2", borderless: true
		},
		{ view: "button", type: "iconButton", icon: "external-link", label: "Export", width: 100}
	]
};
const gridTree = {
	view:"treetable",
	columns:[
		{ id:"id",	header:"",  	width:35},
		{ id:"name",	header:"Product",	 fillspace:4,
			template:"{common.treetable()} #name#" },
		{ id:"code",	header:"Code", sort:"int",fillspace:2},
		{ id:"sales",	header:"Sales", sort:"int",fillspace:2}
	],
	select: true,
	type: {
		icon:function(obj){
			if (obj.$count){
				if (obj.open)
					return "<span class='webix_icon fa-angle-down'></span>";
				else
					return "<div class='webix_icon fa-angle-right'></div>";
			} else
				return "<div class='webix_tree_none'></div>";
		},
		folder:function(obj){
			if (obj.$count){
				if (obj.open)
					return "<span class='webix_icon fa-folder-open-o'></span>";
				else
					return "<span class='webix_icon fa-folder-o'></span>";
			}
			return "<div class='webix_icon fa-file-o'></div>";
		}
	},
	onClick:{
		"fa-angle-down":function(e,id){

			this.close(id);
		},
		"fa-angle-right":function(e,id){
			this.open(id);
		}
	},
	on:{
		onAfterLoad:function(){
			this.select(12);
		}
	}
};

const layout = {
	type: "clean",
	rows:[
		titleTree,
		gridTree
	]
};