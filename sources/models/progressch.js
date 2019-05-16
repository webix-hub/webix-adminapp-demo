export function shuffle(dataA) {
	let a = webix.copy(dataA || data);
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

const data = [
	{ id:1,  year:1, a:10, b:50 },
	{ id:2,  year:2, a:15, b:60 },
	{ id:3,  year:3, a:7, b:53 },
	{ id:4,  year:4, a:13, b:70 },
	{ id:5,  year:5, a:16, b:67 },
	{ id:6,  year:6, a:9, b:56 },
	{ id:7,  year:7, a:9, b:60 },
	{ id:8,  year:8, a:12, b:67 },
	{ id:9,  year:9, a:16, b:70 },
	{ id:10, year:10, a:20, b:75 },
	{ id:11, year:11, a:17, b:70 },
	{ id:12, year:12, a:29, b:89 },
	{ id:13, year:13, a:33, b:94 },
	{ id:14, year:14, a:40, b:91 },
	{ id:15, year:15, a:35, b:85 },
	{ id:16, year:16, a:33, b:80 },
	{ id:17, year:17, a:45, b:73 },
	{ id:18, year:18, a:56, b:78 },
	{ id:19, year:19, a:58, b:81 },
	{ id:20, year:20, a:45, b:76 },
	{ id:21, year:21, a:23, b:65 },
	{ id:22, year:22, a:43, b:67 },
	{ id:23, year:23, a:56, b:73 },
	{ id:24, year:24, a:34, b:64 },
	{ id:25, year:25, a:56, b:69 },
	{ id:26, year:26, a:34, b:56 },
	{ id:27, year:27, a:30, b:51 },
	{ id:28, year:28, a:34, b:59 },
	{ id:29, year:29, a:56, b:63 },
	{ id:30, year:30, a:60, b:69 },
	{ id:31, year:31, a:64, b:76 },
	{ id:32, year:32, a:70, b:80 }
];
export function getProgress(){
	return data;
}