define([
	"views/modules/form_user",
	"views/modules/form_project",
	"views/modules/form_event",
	"views/modules/form_style"
],function(user, project, event, style){

	var layout = {
		type: "clean",
		rows:[
			{
				type: "space",
				rows:[
					{type: "wide",
						cols: [
							user,
							project
						]
					},
					{type: "wide",
						cols: [
							event,
							style
						]
					}
				]

			}
		]
	};

	return { $ui:layout };

});
