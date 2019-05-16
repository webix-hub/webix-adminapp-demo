export function getReviews(){
	return data;
}

var dateFormat = webix.Date.strToDate("%Y-%m-%d");

const data = new webix.DataCollection({
	data:[
		{ id:1, mark:1, photo:"whitten", name:"Claire Whitten", stars:5, date:"2019-01-23", text:"Morgan always completes any assignment on time and to a high standard. No absences without valid reason in 6 months. Polite, courteous, respectful and charming at all times and in all situations, without being obsequious.", tag:"New" },
		{ id:2, mark:0, photo:"sho", name:"Danielle Sho", stars:5, date:"2019-01-19", text:"Unfailingly courteous even when dealing with a difficult person or situation. Morgan has outstanding artistic or craft skills, bringing creativity and originality to the task.", tag:"Pending" },
		{ id:3, mark:0, photo:"ilyushin", name:"Mikhaila Ilyushin", stars:5, date:"2019-01-12", text:"Has a natural flair for jobs involving the use of the hands or hand-tools. Able to cope expertly with intricate detail. Morgan pays great attention to detail. She always presented work properly checked and completely free of error.", tag:"New" },
		{ id:4, mark:1, photo:"yu", name:"Alex Yu", stars:5, date:"2019-01-9", text:"Aiming for a top job in the organization. She sets very high standards, aware that this will bring attention and promotion. Reaches a decision rapidly after taking account of all likely outcomes and estimating the route most likely to bring success.", tag:"Pending" },
		{ id:5, mark:0, photo:"winslow", name:"Joan Winslow", stars:5, date:"2019-01-3", text:"Morgan is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others. Always succeeds in explaining ideas clearly. Others find Morgan easy to understand.", tag:"New" }
	],
	scheme:{
		$init:(obj) => {
			obj.date = dateFormat(obj.date);
		}
	}
});
