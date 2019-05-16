export const data = [
	{
		id:1, status:"new", text:"Test new authentification service", tags:[1,2,3],
		comments:[
			{id:1, user_id:1, date:"2018-06-10 18:45", text:"Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id:2, user_id:2, date:"2018-06-12 19:40", text:"Hi, Rick. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id:3, user_id:3, date:"2018-06-12 20:16", text:"Whoa, Martin. Rick is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br><br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."}
		]
	},
	{
		id:2, status:"work", user_id: 5, text:"Performance tests", tags:[1],
		comments:[
			{id:6, user_id:7, date:"2018-06-14 22:31", text:"One more question, guys. What about the latest specifications?"},
			{id:7, user_id:9, date:"2018-06-14 22:43", text:"They are ready, but not published yet."},
			{id:8, user_id:7, date:"2018-06-14 23:01", text:"Wow great, could you please share them with me?"}
		]
	},
	{
		id:3, status:"work", user_id: 6, text:"Kanban tutorial", tags:[2]
	},
	{
		id:4, status:"work", user_id: 3, text:"SpreadSheet NodeJS", tags:[3]
	},
	{
		id:5, status:"test", user_id: 4, text:"Portlets view", tags:[4,2],
		comments:[
			{id:6, user_id:4, date:"2018-06-14 23:01", text:"No worry, I am planning to finish it up in half an hour and make them public for all. Just wait..)"}
		]
	},
	{ id:6, status:"new", user_id: 7, text:"Form Builder", tags:[4,6] },
	{ id:7, status:"test", text:"Code Snippet", tags:[1,2,3] },
	{ id:8, status:"work", user_id: 1, text:"Backend integration", tags:[5] },
	{ id:9, status:"work", user_id: 2, text:"Drag-n-drop with shifting cards", tags:[5] },
	{ id:10, status:"work", user_id: 4, text:"Webix Jet 2.0", tags:[4] },
	{ id:11, status:"test", user_id: 9, text:"Chat app interface", tags:[4,2] },
	{ id:12, status:"done", user_id: 8, text:"Material skin", tags:[4,6] }
];