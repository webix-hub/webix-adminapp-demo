import {JetView} from "webix-jet";
import {data} from "models/kanban";

export default class SheetView extends JetView{
	config(){
		const impth = "https://docs.webix.com/samples/63_kanban/common/imgs/";

		const config = {
			view:"kanban",
			cols:[{
				header:"Backlog",
				body:{ view:"kanbanlist", status:"new" }
			},{
				header:"In Progress",
				body:{ view:"kanbanlist", status:"work" }
			},{
				header:"Testing",
				body:{ view:"kanbanlist", status:"test" }
			},{
				header:"Done",
				body:{ view:"kanbanlist", status:"done" }
			}],
			editor:true,
			comments: {currentUser:9},
			users:[
				{id:1, value:"Rick Lopes", image:impth + "1.jpg"},
				{id:2, value:"Martin Farrell", image:impth + "2.jpg"},
				{id:3, value:"Douglass Moore", image:impth + "3.jpg"},
				{id:4, value:"Eric Doe", image:impth + "4.jpg"},
				{id:5, value:"Sophi Elliman", image:impth + "5.jpg"},
				{id:6, value:"Anna O'Neal"},
				{id:7, value:"Marcus Storm", image:impth + "7.jpg"},
				{id:8, value:"Nick Branson", image:impth + "8.jpg"},
				{id:9, value:"CC", image:impth + "9.jpg"}
			],
			tags:[
				{id:1, value:"webix"},
				{id:2, value:"jet"},
				{id:3, value:"easy"},
				{id:4, value:"hard"},
				{id:5, value:"kanban"},
				{id:6, value:"docs"},
			]
		};

		return webix.require({
			"https://cdn.webix.com/pro/edge/kanban/kanban.js"	:true,
			"https://cdn.webix.com/pro/edge/kanban/kanban.css"	:true
		}).then(() => config);
	}

	init(){
		this.getRoot().parse(data);
	}
}