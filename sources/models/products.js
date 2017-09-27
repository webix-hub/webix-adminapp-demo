export const data = [];

const number = 150;
let code = 201;
for(let i=0; i<number; i++){
	let status = Math.floor(Math.random() * 4);
	let price = Math.floor(Math.random() * (1500-499))+499;
	let quantity = Math.floor(Math.random() * (400-3))+3;
	let inStore = Math.floor(Math.random() * 9);
	let category = (price>1100?1:(price>800?2:3));

	data.push({
		id: i+1,
		code: "WBX"+code,
		name: "Test product "+( i+1),
		category: category,
		categoryName:(category == 1?"Wood furniture":(category == 2?"Home furniture":"Office furniture")),
		price: price,
		statusName:(status>1?"Published":(status==1?"Not published":"Deleted")),
		status: (status>1?"1":(status==1?"2":"0")),
		quantity:quantity,
		in_stock: (inStore>1)
	});

	code++;
}