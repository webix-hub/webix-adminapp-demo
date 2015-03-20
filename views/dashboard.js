define([
	"views/modules/dashline",
	"views/modules/visitors",
	"views/modules/orders",
	"views/modules/messages",
	"views/modules/revenue",
	"views/modules/tasks",
	"views/modules/map"
],function(dashline, visitors, orders, messages, revenue, tasks, map){
	
	var layout = {
		type: "clean",
		rows:[
			dashline,
			{
				margin:-10,
				rows:[
					{
						height: 220,
						type: "material",
						cols: [
							visitors,
							orders
						]
					},
					{
						type: "material",
						cols: [
							messages,
							{
								rows: [
							  		revenue
								]
							}
						]
					},
					{
						type: "material",
						cols: [
							tasks,
							map
						]
					}
				]

			}
		]
	};

	return { $ui:layout };

});