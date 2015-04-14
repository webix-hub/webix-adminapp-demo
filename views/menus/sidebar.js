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
							if(this.getItem(id).$count){
								debugger;
								return false;
							}
							
						},
						onAfterSelect:function(id){
							this.$scope.show("./"+id);
							var item = this.getItem(id);
							webix.$$("title").parse({title: item.value, details: item.details});
						}
					},
					data:[
						{id: "main", value: "Main", open: true, data:[
							{ id: "dashboard", value: "Dashboard", icon: "home", $css: "dashboard", details:"reports and statistics"},
							{ id: "orders", value: "Orders", icon: "check-square-o", $css: "orders", details:"order reports and editing"},
							{ id: "products", value: "Products", icon: "cube", $css: "products", details:"all products"},
							{ id: "product_edit", value: "Product Edit", icon: "pencil-square-o", details: "changing product data"}
						]},
						{id: "components", open: true, value:"Components", data:[
							{ id: "datatables", value: "Datatables", icon: "table", details: "datatable examples" },
							{ id: "charts", value: "Charts", icon: "bar-chart-o", details: "charts examples"},
							{ id: "forms", value: "Forms", icon: "list-alt", details: "forms examples"}

						]},
						{id: "uis", value:"UI Examples", open:1, data:[
							{ id: "calendar", value: "My Calendar", icon: "calendar", details: "calendar example" },
							{ id: "files", value: "File Manager", icon: "folder-open-o", details: "file manager example" }

						]}
					]
				}
			]
		}
	};

});
