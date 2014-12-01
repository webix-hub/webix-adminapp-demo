define([],function(){
	var folders = [
		{id: "files", value: "Files", open: true, data:[
			{ id: "documents", value: "Documents", open: true, data:[
				{id: "presentations", value: "Presentations"},
				{id: "reports", value: "Reports", open: true, data:[
					{id: "usa", value: "USA"},
					{id: "europe", value: "Europe"},
					{id: "asia", value: "Asia"}
				]}
			]},
			{ id: "images", value: "Images", open: true, data:[
				{id: "thumbnails", value: "Thumbnails"},
				{id: "base", value: "Base images"}
			]},
			{ id: "video", value: "Video"}
		]}
	];
	files = [
		{ id: "documents", value: "Documents", pId: "files"},
		{ id: "presentations", value: "Presentations",pId: "documents"},
		{ id: "reports", value: "Reports",pId: "documents"},
		{ id: "usa", value: "USA",pId: "reports"},
		{ id: "europe", value: "Europe",pId: "reports"},
		{ id: "asia", value: "Asia",pId: "reports"},
		{ id: "images", value: "Images", pId: "files"},
		{ id: "thumbnails", value: "Thumbnails",pId: "images"},
		{ id: "base", value: "Base images",pId: "images"},
		{ id: "video", value: "Video",pId: "files"},
		{id: "video1", value: "New Year 2013.avi", icon: "file-video-o", type:"video",   date: "2014-01-01 16:01", size: "25.83 MB", pId: "video" },
		{id: "video2", value: "Presentation.avi", icon: "file-video-o",type:"video",  date: "2014-10-04 12:05", size: "110.72 MB" , pId: "video"},
		{id: "pres1", value: "October 2014.ppt", icon: "file-powerpoint-o", type:"pp", date: "2014-03-10 16:01", size: "12.83 KB",pId: "presentations"},
		{id: "pres2", value: "June 2014.ppt", icon: "file-powerpoint-o",  type:"pp", date: "2014-03-10 16:03", size: "20.10 KB",pId: "presentations"},
		{id: "pres3", value: "April 2014.ppt", icon: "file-powerpoint-o",  type:"pp", date: "2014-03-10 16:04", size: "15.75 KB",pId: "presentations"},
		{id: "pres4", value: "November 2013.ppt", icon: "file-powerpoint-o",  type:"pp", date: "2014-03-10 16:05", size: "13.13 KB",pId: "presentations"},
		{id: "salesUS", value: "Sales USA.ppt", icon: "file-excel-o",  type:"ex", date: "2014-03-10 16:01", size: "12.83 KB",pId: "usa"},
		{id: "overviewUS", value: "Overview USA.doc", icon: "file-text-o",  type:"doc", date: "2014-03-10 16:01", size: "15.03 KB",pId: "usa"},
		{id: "pricesUS", value: "Prices USA.ppt", icon: "file-excel-o", type:"ex",  date: "2014-03-10 16:01", size: "15.83 KB",pId: "usa"},
		{id: "productsUS", value: "Products USA.ppt", icon: "file-excel-o",  type:"ex", date: "2014-03-10 16:01", size: "20.83 KB",pId: "usa"},
		{id: "salesEurope", value: "Sales Europe.ppt", icon: "file-excel-o",  type:"ex", date: "2014-03-10 16:01", size: "12.83 KB", pId: "europe"},
		{id: "pricesEurope", value: "Prices Europe.ppt", icon: "file-excel-o", type:"ex",  date: "2014-03-10 16:01", size: "15.83 KB", pId: "europe"},
		{id: "productsEurope", value: "Products Europe.ppt", icon: "file-excel-o", type:"ex",  date: "2014-03-10 16:01", size: "20.83 KB", pId: "europe"},
		{id: "overviewEurope", value: "Overview Europe.doc", icon: "file-text-o",  type:"doc", date: "2014-03-10 16:01", size: "15.03 KB",pId: "europe"},
		{id: "salesAsia", value: "Sales Asia.ppt", icon: "file-excel-o", type:"ex",  date: "2014-03-10 16:01", size: "12.83 KB", pId: "asia"},
		{id: "pricesAsia", value: "Prices Asia.ppt", icon: "file-excel-o",  type:"ex", date: "2014-03-10 16:01", size: "15.83 KB", pId: "asia"},
		{id: "overviewAsia", value: "Overview Asia.doc", icon: "file-text-o",  type:"doc", date: "2014-03-10 16:01", size: "15.03 KB",pId: "asia"},
		{id: "productsAsia", value: "Products Asia.ppt", icon: "file-excel-o",  type:"ex", date: "2014-03-10 16:01", size: "20.83 KB", pId: "asia"},
		{id: "thumbnails1", value: "Product 1-th.jpg", icon: "file-image-o", type:"img",  date: "2014-03-10 16:01", size: "34.83 KB", pId: "thumbnails"},
		{id: "thumbnails2", value: "Product 2-th.jpg", icon: "file-image-o",  type:"img",  date: "2014-03-10 16:03", size: "40.10 KB", pId: "thumbnails"},
		{id: "thumbnails3", value: "Product 3-th.jpg", icon: "file-image-o",  type:"img",  date: "2014-03-10 16:04", size: "33.75 KB", pId: "thumbnails"},
		{id: "thumbnails4", value: "Product 4-th.jpg", icon: "file-image-o", type:"img",   date: "2014-03-10 16:05", size: "35.13 KB", pId: "thumbnails"},
		{id: "thumbnails5", value: "Product 5-th.jpg", icon: "file-image-o",  type:"img",  date: "2014-03-10 16:06", size: "34.72  KB", pId: "thumbnails"},
		{id: "thumbnails6", value: "Product 6-th.jpg", icon: "file-image-o", type:"img",   date: "2014-03-10 16:08", size: "37.06  KB", pId: "thumbnails"},
		{id: "base1", value: "Product 1.jpg", icon: "file-image-o", type:"img",   date: "2014-03-10 16:01", size: "74.83 KB", pId: "base"},
		{id: "base2", value: "Product 2.jpg", icon: "file-image-o", type:"img",   date: "2014-03-10 16:03", size: "80.10 KB", pId: "base"},
		{id: "base3", value: "Product 3.jpg", icon: "file-image-o", type:"img",   date: "2014-03-10 16:04", size: "73.75 KB", pId: "base"},
		{id: "base4", value: "Product 4.jpg", icon: "file-image-o", type:"img",   date: "2014-03-10 16:05", size: "75.13 KB", pId: "base"},
		{id: "base5", value: "Product 5.jpg", icon: "file-image-o", type:"img",   date: "2014-03-10 16:06", size: "74.72 KB" , pId: "base"},
		{id: "base6", value: "Product 6.jpg", icon: "file-image-o", type:"img",   date: "2014-03-10 16:08", size: "77.06 KB", pId: "base"},
		{id: "video1", value: "New Year 2013.avi", icon: "file-video-o", type:"video",   date: "2014-01-01 16:01", size: "25.83 MB", pId: "video" },
		{id: "video2", value: "Presentation.avi", icon: "file-video-o",type:"video",  date: "2014-10-04 12:05", size: "110.72 MB" , pId: "video"},
		{id: "video3", value: "Conference.avi", icon: "file-video-o", type:"video", date: "2014-11-03 18:05", size: "312.56 MB", pId: "video" }
	];

	for (var i = 1; i < 100; i++)
		files.push({ pId: "files", value:"backup."+((i<10)?"00":"0")+i+".zip", icon:"file-zip-o", type:"zip", size:"500 MB" })
	
	return {
		folders:folders,
		files:files
	};

});
