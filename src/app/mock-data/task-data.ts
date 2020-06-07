import { v4 as uuidv4 } from 'uuid';
import { TaskTrack } from './../tasks-dashboard/models/taskTrack';

const startDate = new Date(2020, 0, 1);
const endDate = new Date();

const getRandomDate = (): number => {
	const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
	return date.getTime();
}

export const taskTracks: TaskTrack[] = [{
	title: "To Do",
	status: "todo",
	Id: uuidv4(),
	taskList: [{
		title: "Prepare designs for websites",
		Id: uuidv4(),
		status: "todo",
		description: "Create designs for responsive layouts",
		date: getRandomDate(),
		users: ["Mary"]
	}]
}, {
	title: "In Progress",
	status: "inprogress",
	Id: uuidv4(),
	taskList: [{
		title: "Interview with users",
		Id: uuidv4(),
		status: "inprogress",
		description: "Conduct new interview sessions",
		date: getRandomDate(),
		users: ["John"]
	}, {
		title: "Final editions",
		Id: uuidv4(),
		status: "inprogress",
		description: "Final editions for the projects",
		date: getRandomDate(),
		users: ["Edward"]
	}]
}, {
	title: "In Review",
	status: "review",
	Id: uuidv4(),
	taskList: [{
		title: "Create UI kit for the project",
		Id: uuidv4(),
		status: "review",
		description: "UI kit creations from various sources",
		date: getRandomDate(),
		users: ["Chris", "Mary"]
	}]
}, {
	title: "Done",
	status: "done",
	Id: uuidv4(),
	taskList: [{
		title: "Prepare detailed brief",
		Id: uuidv4(),
		status: "done",
		description: "Detailed brief for devs and designer",
		date: getRandomDate(),
		users: ["Edward"]
	}]
}
];