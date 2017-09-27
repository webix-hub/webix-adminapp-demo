import user		from "views/modules/form_user";
import project	from "views/modules/form_project";
import event	from "views/modules/form_event";
import style	from "views/modules/form_style";

var layout = {
	type: "space",
	cols:[
		{type: "wide",
			rows: [
				user,
				event
			]
		},
		{type: "wide",
			rows: [
				style,
				project
			]
		}
	]

};

export default layout;