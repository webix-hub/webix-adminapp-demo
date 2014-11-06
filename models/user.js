define([

],function(){

	// if you need not custom methods, just use
	// return webix.remote.users;

	//hardcode user
	webix.remote.$user = { id:1 };

	var current_user = webix.remote.$user || null;
	if (current_user)
		setCurrentUser(current_user);

	function setCurrentUser(value, afterlogin){
		//we need to reload document after login out
		if (!value){
			session.logout().then(function(){
				current_user = null;
				document.location.reload();	
			});
			return;
		}
		//we need to reload document when changing active user
		if (current_user && current_user != value){
			document.location.reload();
			return;
		}

		current_user = value;

		var isvalid = (current_user.settings && typeof current_user.settings == "string");
		current_user.settings = isvalid ? JSON.parse(current_user.settings) : {};

		webix.extend(current_user.settings,{
			language:"en",
			theme:"siberia:webix",
			notifications:0
		});

		require(["helpers/locale", "helpers/theme"], function(locale, theme){
			//if user has different theme after login - we need to reload page
			if (afterlogin){
				if (!locale.isNow(current_user.settings.language) ||
				    !theme.isNow(current_user.settings.theme))
				    	document.location.reload();
			}

			//call save to store values in the local store			
			locale.setLang(current_user.settings.language, afterlogin);
			theme.setTheme(current_user.settings.theme, afterlogin);
		});
	}

	function getCurrentUser(){
		return current_user;
	}

	function saveSetting(key, value, reload){
		if(current_user){
			var id = current_user.id,
				settings = current_user.settings;

			if(!settings[key] || value != settings[key]){
				if (reload)
					document.location.reload();
			}
		}
	}


	return {
		saveSetting:saveSetting,
		getCurrentUser:getCurrentUser,
		setCurrentUser:setCurrentUser,
	};

});