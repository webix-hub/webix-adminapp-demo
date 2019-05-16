import { shuffle } from "models/progressch";

const data = [
	{ value:"Prepare finance report", checked:true },
	{ value:"Solex project strategy meeting", checked:0 },
	{ value:"WestEurope partners call", checked:0 },
	{ value:"Prepare presentation for summer conference", checked:0 },
	{ value:"Check messages", checked:true },
	{ value:"Market research analysis", checked:true },
	{ value:"Prepare presentation for spring conference", checked:0 },
	{ value:"Discussing new theme for website", checked:true },
	{ value:"WestEurope partners call", checked:true },
	{ value:"Scroll task", checked:true }
];

export function getProjects(){
	return shuffle(data);
}