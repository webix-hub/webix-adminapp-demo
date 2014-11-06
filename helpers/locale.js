define([
	"libs/polyglot",
	"models/user"
], function(polyglot, users){

	var defaultlang = "en";
	var key = "--:app:lang";
	var current_lang = "";

	function _get_lang(){
		if(users.getCurrentUser())
			return users.getCurrentUser().settings.language;

		return webix.storage.local.get(key) || defaultlang;
	}
	function _set_lang(lang, init){
		webix.storage.local.put(key, lang);
		if (users.getCurrentUser())
			users.saveSetting("language", lang, lang != current_lang);
		else
			document.location.reload();
	}

	function create_locale(lang){
		current_lang = lang;
		define("locale", [
			"locales/"+lang
		], function(data){
			var poly = new Polyglot({ phrases:data });
				poly.locale(lang);

			var t = webix.bind(poly.t, poly);
			t.template = function(a){
				return a.replace(/%([a-zA-Z0-9.]+)%/g, function(_, match){
					return poly.t(match);
				});
			};
			return t;
		});
	}

	return {
		$oninit:function(app, config){
			key = (app.config.id || "")+key;

			var lang = _get_lang();
			create_locale(lang);
		},
		setLang: _set_lang,
		getLang: _get_lang,
		isNow:function(val){ return val == current_lang; }
	};
});