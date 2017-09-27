import rating		from "views/modules/data_rating";
import treetable	from "views/modules/data_treetable";
import progress		from "views/modules/data_progress";
import spans		from "views/modules/data_spans";
import pager		from "views/modules/data_pager";

const layout = {
	type: "space",
	rows:[
		{
			type: "wide",
			cols:[
				{
					type:"wide",
					rows:[
						rating,
						treetable
					]
				},
				{
					type:"wide",
					gravity: 0.8,
					rows:[
						progress,
						spans
					]
				}

			]
		},
		pager
	]
};

export default layout;