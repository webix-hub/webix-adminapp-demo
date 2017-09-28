import user		from "views/modules/form_user";
import project	from "views/modules/form_project";
import event	from "views/modules/form_event";
import style	from "views/modules/form_style";

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

export default layout;