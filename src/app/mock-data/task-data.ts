import { v4 as uuidv4 } from 'uuid';
import { TaskTrack } from './../tasks-dashboard/models/taskTrack';

export const taskTracks: TaskTrack[] = [{
	title: "To Do",
	status: "todo",
	Id: uuidv4(),
	taskList: [{
		title: "Prepare designs for websites",
		Id: uuidv4(),
		status: "todo",
		description: "Create designs for responsive layouts",
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
		users: ["John"]
	}, {
		title: "Final editions",
		Id: uuidv4(),
		status: "inprogress",
		description: "Final editions for the projects",
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
		users: ["Edward"]
	}]
}

];