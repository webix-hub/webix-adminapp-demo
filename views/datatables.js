define([
	"views/modules/data_rating",
	"views/modules/data_treetable",
	"views/modules/data_progress",
	"views/modules/data_spans",
	"views/modules/data_pager"
], function(rating,treetable,progress,spans,pager){

var layout = {
	type: "clean",
	rows:[
		{
			cols:[
				{
					type:"material",
					rows:[
						rating,
						treetable
					]
				},
				{
					type:"material",
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


return { $ui:layout };

});