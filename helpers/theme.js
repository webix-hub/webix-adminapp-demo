define([
	"models/user"
], function(users){

	var key = "--:app:theme";
	var current_theme = webix.storage.local.get(key) || "siberia:webix";

	function _get_theme(){
		if(users.getCurrentUser())
			return users.getCurrentUser().settings.theme;

		return current_theme;
	}

	function _set_theme(theme){
		webix.storage.local.put(key, theme);
		if(users.getCurrentUser())
			users.saveSetting("theme", theme, theme != current_theme);
		else
			document.location.reload();

		current_theme = theme;
	}

	return {
		setTheme: _set_theme,
		getTheme: _get_theme,
		isNow:function(val){ return val == current_theme; }
	};
});