import {JetView} from "webix-jet";

function showIcon(obj, common, row){
	const sign = row ? "plus" : "minus";
	return `<span class="feature webix_icon wxi-${sign}-circle">`;
}

export default class ReatureView extends JetView {
	config(){
		return {
			view:"datatable", localId:"grid",
			select:true, css:"webix_header_border",
			columns:[
				{ id:"feature", fillspace:1.5, header:[{ text:"Feature", rowspan:2 }] },
				{
					id:"start", fillspace:1, header:[
						{ text:"Plans", colspan:3, css:"header_center" },
						{ text:"Start", css:"header_center" }
					],
					template:showIcon, css:"column_center"
				},
				{ id:"advanced", css:"column_center", fillspace:1, header:["", { text:"Advanced", css:"header_center"}], template:showIcon },
				{ id:"pro", css:"column_center", fillspace:1, header:["", { text:"Pro", css:"header_center" }], template:showIcon }
			]
		};
	}
	init(grid){
		grid.parse([
			{ feature:"Unlimited lists", start:1, advanced:1, pro:1 },
			{ feature:"Separate outlines", start:1, advanced:1, pro:1 },
			{ feature:"Tag", start:1, advanced:1, pro:1 },
			{ feature:"Markdown", start:1, advanced:0, pro:1 },
			{ feature:"Note", start:1, advanced:1, pro:1 },
			{ feature:"Color label", start:1, advanced:0, pro:0 },
			{ feature:"Numbered list", start:1, advanced:1, pro:0 },
			{ feature:"Heading", start:1, advanced:1, pro:0 },
			{ feature:"Creation date", start:1, advanced:0, pro:0 },
			{ feature:"Last edited time", start:1, advanced:1, pro:1 },
			{ feature:"File upload", start:1, advanced:1, pro:1 },
			{ feature:"Project management", start:1, advanced:0, pro:0 },
			{ feature:"Solutions database", start:1, advanced:1, pro:0 },
			{ feature:"Webinars", start:1, advanced:0, pro:0 },
			{ feature:"Training groups", start:1, advanced:0, pro:0 },
			{ feature:"Complex widgets", start:1, advanced:0, pro:0 },
			{ feature:"Typography", start:1, advanced:0, pro:0 }
		]);
	}
}
