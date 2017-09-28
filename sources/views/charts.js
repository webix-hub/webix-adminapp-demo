import visitors 	from "views/modules/visitors";
import orders 		from "views/modules/orders";
import chart_diff 	from "views/modules/chart_diff";
import revenue 		from "views/modules/revenue";
import tasks	 	from "views/modules/taskschart";
import diffchart 	from "views/modules/diffchart";

const layout = {
	type: "clean",
	rows:[
		{
			type: "clean", margin:-10,
			rows:[

				{
					type: "material",
					minHeight: 250,
					cols: [
						{
							gravity: 4,
							type: "clean",
							rows:[
								{
									"template": "<span class='webix_icon fa-area-chart'></span>Different charts in one", "css": "sub_title", "height": 30
								},
								chart_diff
							]
						},
						diffchart
					]
				},
				{

					type: "material",
					cols: [
						{

							type: "clean",
							rows:[
								{
									"template": "<span class='webix_icon fa-line-chart'></span>Sales", "css": "sub_title", "height": 30
								},
								revenue
							]
						},
						{
							"type": "clean",
							"rows":[
								{
									"template": "<span class='webix_icon fa-tasks'></span>Tasks", "css": "sub_title", "height": 30
								},
								tasks,
								{template: " "}
							]

						}
					]
				},
				{
					height: 220,
					type: "material",
					cols: [

						orders,
						visitors
					]
				}
			]

		}
	]
};

export default layout;