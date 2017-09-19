define([
	"views/modules/scheduler"
], function(calendar){

	var layout = {
		type: "space",
		cols:[
			calendar
		]
	};

	return { $ui:layout };

});