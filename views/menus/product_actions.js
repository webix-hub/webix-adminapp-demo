define(function(){

	return {
		$ui:{
			view: "submenu",
			id: "productPopup",
			width: 200,
			padding:0,
			data: [
				{id: 1, icon: "delete", value: "Export To Excel"},
				{id: 2, icon: "file-pdf-o", value: "Export To PDF"}
			],
			on:{
				onItemClick:function(id){
					if(id==1){
						$$("orderData").exportToExcel();
					}
					else if(id==2)
						$$("orderData").exportToPdf();
				}
			}
		}
	};

});