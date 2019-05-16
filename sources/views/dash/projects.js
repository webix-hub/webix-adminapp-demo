import { JetView } from "webix-jet";
import { getProjects } from "models/projectsd";

function getTree(label){
	return {
		id:label, view:"tree", css:"check_tree",
		type:{
			checkbox:function(obj){
				if (obj.nocheckbox)
					return "";

				return `<span style="line-height:32px" class="webix_inp_checkbox_border webix_el_group webix_checkbox_${obj.checked?1:0}">
					<input style="margin-top:11px;display:none" id="x1557329607426" type="checkbox" ${obj.checked ? "checked=\"1\"" : ""} aria-label=${obj.checked ?"Checked":"Unchecked"}><a role="presentation" onclick="javascript:void(0)"><button role="checkbox" aria-checked=${obj.checked ?"true":"false"} aria-label=${obj.checked ?"Checked":"Unchecked"} type="button" aria-invalid="false" class="webix_custom_checkbox webix_tree_checkbox"></button></a></span>`;
			},
			template:(obj, common) => {
				return `${common.checkbox(obj)} <span class="${obj.checked ? "checked" : ""}">${obj.value}</span>`;
			}
		},
		select:true,
		on:{
			onItemCheck(){
				this.refresh();
			}
		}
	};
}

export default class ProjectsView extends JetView {
	config(){
		return {
			rows:[
				{
					view:"tabbar", multiview:true, options:[
						{ id:"all", value:"To-do list (all)" },
						{ id:"first", value:"Today" },
						{ id:"second", value:"Tomorrow" }
					]
				},
				{
					animate:false,
					cells:[
						getTree("all"),
						getTree("first"),
						getTree("second")
					]
				}
			]
		};
	}
	init(){
		const trees = this.getRoot().queryView("tree","all");
		for (let i = 0; i < trees.length; i++){
			trees[i].parse(getProjects());
		}
	}
}