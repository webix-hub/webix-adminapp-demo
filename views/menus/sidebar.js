define(function(){
	
	return {
		$ui:{
			width: 200,

			rows:[
				{
					view: "tree",
					id: "app:menu",
					type: "menuTree2",
					css: "menu",
					activeTitle: true,
					select: true,
					tooltip: {
						template: function(obj){
							return obj.$count?"":obj.details;
						}
					},
					on:{
						onBeforeSelect:function(id){
							return !this.getItem(id).$count;
						},
						onAfterSelect:function(id){
							this.$scope.show("./"+id);

							var item = this.getItem(id);
							webix.$$("title").parse({title: item.value, details: item.details});
						}
					},
					data:[
						{id: "main", value: "Main", open: true, data:[
							{id: "dashboard", value: "Dashboard", icon: "home", $css: "dashboard", details:"reports and statistics"},
							{id: "orders", value: "Orders", icon: "check", $css: "orders", details:"order reports and editing"},
							{id: "products", value: "Products", icon: "leaf", $css: "products", details:"product reports and editing"}
						]},
						{id: "components", open: true, value:"Components", data:[
							{ id: "data", value: "Datatables", icon: "table", details: "datatable examples" },
							{ id: "charts", value: "Charts", icon: "bar-chart-o", details: "charts examples"},
							{ id: "form", value: "Forms", icon: "file-text-o", details: "form examples"},
							{ id: "windows", value: "Windows", icon: "list-alt", details: "window examples"}

						]}
					]
				}
			]
		}
	};

});
