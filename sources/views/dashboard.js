import dashline 	from "views/modules/dashline";
import visitors 	from "views/modules/visitors";
import orders 		from "views/modules/orders";
import messages 	from "views/modules/messages";
import revenue 		from "views/modules/revenue";
import tasks 		from "views/modules/tasks";
import map 			from "views/modules/map";

const layout = {
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
						revenue

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

export default layout;