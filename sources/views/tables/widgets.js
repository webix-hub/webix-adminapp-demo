import {JetView} from "webix-jet";

export default class ReatureView extends JetView {
	config(){
		return {
			view:"treetable", localId:"grid",
			select:true,
			columns:[
				{ id:"id", header:"#" },
				{
					id:"widget", template:"{common.treetable()} #widget#", fillspace:2,
					header:[ "Widget", { content:"richSelectFilter" } ]
				},
				{ id:"author", header:"Author", fillspace:1 },
				{ id:"created", header:"Status", template:obj => {
					const color = obj.created == "Pending" ? "yellow" : (obj.created == "Planning" ? "blue" : "green");
					return `<span class="${color}">${obj.created}</span>`;
				} }
			]
		};
	}
	init(grid){
		grid.parse([
			{ id:"248-701", widget:"Webix", author:"Corvo Attano", created:"Planning", data:[
				{
					id:"248-702", widget:"Layout branch", author:"Booker DeWitt", created:"In progress", data:[
						{ id:"248-703", widget:"Accordion", author:"Elizabeth DeWitt", created:"Planning" },
						{ id:"248-704", widget:"Multiview", author:"Daisy Fitzroy", created:"Pending" },
						{ id:"248-705", widget:"Layout", author:"Rosalind Lutece", created:"Planning" },
						{ id:"248-706", widget:"Dashboard", author:"Lady Comstock", created:"Planning" },
						{ id:"248-707", widget:"GridLayout", author:"Robert Lutece", created:"Planning" }
					]
				},
				{
					id:"248-708", widget:"Components", author:"Emily Kaldwin", created:"Pending", data:[
						{ id:"248-709", widget:"Datatable", author:"Granny Rags", created:"Planning" },
						{ id:"248-710", widget:"List", author:"Piero Joplin", created:"Planning" },
						{ id:"248-711", widget:"Dataview", author:"The Outsider", created:"In progress" },
						{ id:"248-712", widget:"Tree", author:"Jessamine Kaldwin", created:"In progress" },
						{ id:"248-713", widget:"Treetable", author:"Daud Knife", created:"Planning" },
						{ id:"248-714", widget:"Bar Chart", author:"Billie Lurk", created:"Planning" },
						{ id:"248-715", widget:"Area Chart", author:"Delilah Copperspoon", created:"Planning" },
						{ id:"248-716", widget:"Gauge", author:"Anton Sokolov", created:"In progress" },
						{ id:"248-717", widget:"Multicombo", author:"Aramis Stilton", created:"Planning" }
					]
				}
			]}
		]);
		grid.openAll();
	}
}
