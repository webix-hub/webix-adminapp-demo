export const allpayments = new webix.DataCollection({
	data:[
		{"id":1,"status":"success","date":"2018-09-24 04:36","method":"PayPal","number":"do***@yahoo.com","type":0,"sum":"105.15","left":"847.71","name":"The Smoking Jug","city":"Tirane","country":"AL"},
		{"id":2,"status":"success","date":"2018-09-23 19:09","method":"MasterCard","number":"5128...8960","type":1,"sum":"327.50","left":"2371.18","name":"The Invincible Disguise","city":"Buenos Aires","country":"AR"},
		{"id":3,"status":"success","date":"2018-09-22 05:42","method":"Visa","number":"4781...9299","type":1,"sum":"172.66","left":"2456.07","name":"The Burning Dwarf","city":"Canberra","country":"AU"},
		{"id":4,"status":"failed","date":"2018-09-21 05:29","method":"Visa","number":"4802...9797","type":1,"sum":"253.24","left":"3202.83","name":"The Waving Pot","city":"Vienna","country":"AT"},
		{"id":5,"status":"success","date":"2018-09-20 21:20","method":"MasterCard","number":"5170...3971","type":0,"sum":"328.90","left":"471.64","name":"The Dry Carriage Outfitter","city":"Minsk","country":"BY"},
		{"id":6,"status":"success","date":"2018-09-19 22:29","method":"MasterCard","number":"5177...4636","type":1,"sum":"334.20","left":"1839.00","name":"The Hungry Weapon Potions","city":"Brussels","country":"BE"},
		{"id":7,"status":"success","date":"2018-09-18 03:14","method":"MasterCard","number":"5131...0432","type":1,"sum":"200.37","left":"749.46","name":"The Growing Feather Butcher Shop","city":"Brasilia","country":"BR"},
		{"id":8,"status":"success","date":"2018-09-17 12:29","method":"Visa","number":"4141...9887","type":0,"sum":"23.09","left":"2468.39","name":"The Cuddly Dress Pharmacy","city":"Ottawa","country":"CA"},
		{"id":9,"status":"success","date":"2018-09-16 08:45","method":"PayPal","number":"jet***@aol.com","type":1,"sum":"31.59","left":"3130.40","name":"Fit Sew Good","city":"Beijing","country":"CN"},
		{"id":10,"status":"success","date":"2018-09-15 10:01","method":"Visa","number":"4930...2453","type":0,"sum":"134.63","left":"2671.30","name":"Grate Expectations","city":"Prague","country":"CZ"},
		{"id":11,"status":"success","date":"2018-09-14 21:24","method":"MasterCard","number":"5119...3751","type":1,"sum":"108.69","left":"2369.38","name":"The Educated Armor","city":"Copenhagen","country":"DK"},
		{"id":12,"status":"success","date":"2018-09-13 07:12","method":"MasterCard","number":"5150...1835","type":1,"sum":"16.49","left":"1137.82","name":"The Acclaimed Plum","city":"Cairo","country":"EG"},
		{"id":13,"status":"success","date":"2018-09-12 17:39","method":"MasterCard","number":"5184...5903","type":1,"sum":"143.66","left":"2640.23","name":"The Hairy Hazelnut","city":"Helsinki","country":"FI"},
		{"id":14,"status":"success","date":"2018-09-11 11:28","method":"Visa","number":"4773...5816","type":1,"sum":"11.59","left":"704.37","name":"The Fading Tankard","city":"Paris","country":"FR"},
		{"id":15,"status":"success","date":"2018-09-10 15:31","method":"PayPal","number":"neo***@optonline.net","type":0,"sum":"69.56","left":"2120.64","name":"The Fluffy Anvil Optician","city":"Tbilisi","country":"GE"},
		{"id":16,"status":"failed","date":"2018-09-9 14:00","method":"PayPal","number":"dal***@att.net","type":1,"sum":"246.03","left":"772.80","name":"The Nutty Potato Takeaway","city":"Berlin","country":"DE"},
		{"id":17,"status":"waiting","date":"2018-09-8 12:41","method":"Visa","number":"4435...0652","type":1,"sum":"62.13","left":"682.68","name":"The Fantastic Spaceship Antique Store","city":"New Delhi","country":"IN"},
		{"id":18,"status":"success","date":"2018-09-7 06:37","method":"MasterCard","number":"5130...1376","type":1,"sum":"43.69","left":"633.88","name":"The Careful Painting Deli","city":"Dublin","country":"IE"},
		{"id":19,"status":"success","date":"2018-09-6 08:44","method":"MasterCard","number":"5114...6585","type":1,"sum":"10.19","left":"1878.33","name":"Sew and Tell","city":"Rome","country":"IT"}
	],
	scheme:{
		$init:function(obj){
			obj.date = webix.i18n.parseFormatDate(obj.date);
			const curr_month = new Date().getMonth();
			const data_month = obj.date.getMonth();
			if (curr_month - data_month != 0){
				if (obj.id < 25)
					obj.date.setMonth(curr_month);
				else if (obj.id >= 25)
					obj.date.setMonth(curr_month-1);
			}
			const curr_year = new Date().getFullYear();
			const data_year = obj.date.getFullYear();
			if (curr_year - data_year > 0){
				obj.date.setYear(curr_year);
			}
		}
	}
});
