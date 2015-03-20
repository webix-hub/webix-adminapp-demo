define([
	"views/modules/dashline",
	"views/modules/visitors",
	"views/modules/orders",
	"views/modules/chart_diff",
	"views/modules/revenue",
	"views/modules/taskschart",
	"views/modules/diffchart"
],function(dashline, visitors, orders, chart_diff, revenue, tasks, diffchart){

	var layout = {
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

	return { $ui:layout };

});
