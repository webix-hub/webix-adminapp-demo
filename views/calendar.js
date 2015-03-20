define([
	"views/modules/scheduler"
], function(calendar){

	var layout = {
		type: "clean",
		cols:[
			calendar
		]
	};

	return { $ui:layout };

});