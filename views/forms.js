define([
	"views/modules/form_user",
	"views/modules/form_project",
	"views/modules/form_event",
	"views/modules/form_style"
],function(user, project, event, style){

	var layout = {
		
		cols:[
			{type: "material",
				rows: [
					user,
					event
				]
			},
			{type: "material",
				rows: [
					style,
					project
				]
			}
		]

	};

	return { $ui:layout };

});
