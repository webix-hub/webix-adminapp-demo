define(function(){

	var chart = {
		view:"chart",
		borderless: true,
		type: "bar",
		height: 130,
		id: "productsBar",
		barWidth: 60,
		radius:0,
		alpha: 0.9,
		color: function(obj){
			var color = "#a693eb";
			if(obj.productId == 2)
				color = "#63b4ea";
			else if(obj.productId == 3){
				color = "#f19b60";
			}
			else if(obj.productId == 4){
				color = "#49cd81";
			}

			return color;
		},
		yAxis:{
			template: function(value){ return parseInt(value,10); }
		},
		xAxis: {
			template: "#name#"
		},
		on: {
			onAfterLoad: function(){
				$$("topSelling").setValue("month");
			}
		},
		padding:{
			top:0,
			left:50,
			right:10,
			bottom: 20
		},
		data:[
			{productId:1,value: 15000,selection: "month", name:"Chai"},
			{productId:1,value: 35000,selection: "month3", name:"Chocolate"},
			{productId:1,value: 130000,selection: "year", name:"Chai"},
			{productId:2,value: 20000,selection: "month", name:"Olive Oil"},
			{productId:2,value: 50000,selection: "month3", name:"Olive Oil"},
			{productId:2,value: 140000,selection: "year", name:"Olive Oil"},
			{productId:3,value: 17000,selection: "month", name:"Coffee"},
			{productId:3,value: 40000,selection: "month3", name:"Coffee"},
			{productId:3,value: 120000,selection: "year", name:"Coffee"},
			{productId:4,value: 9000,selection: "month", name:"Syrup"},
			{productId:4,value: 45000,selection: "month3", name:"Marmalade"},
			{productId:4,value: 100500,selection: "year", name:"Syrup"}
		]
	};

	var form = {
		type: "form",
		cols:[
			{
				view: "radio", id:"topSelling", label: "", labelWidth: 0, vertical: true,on:{
				onChange: function(){
					$$("productsBar").filter(function(obj){ return obj.selection == $$("topSelling").getValue(); });
				}
			},
				options: [
					{id: "month", value:"Last month"},
					{id: "month3", value: "Last 3 months"}
				]
			},
		]
	};

	var layout = {
		rows:[
			{
				"template": "<span class='webix_icon fa-bar-chart'></span>Top selling products", "css": "sub_title",  height:50
			},
			form,
			chart		
		]
	};


	return { $ui: layout };

});
