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
				type: "space",
				rows:[
					{
						height: 220,
						type: "wide",
						cols: [
							visitors,
							orders
						]
					},
					{
						type: "wide",
						cols: [
							messages,
							revenue

						]
					},
					{
						type: "wide",
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