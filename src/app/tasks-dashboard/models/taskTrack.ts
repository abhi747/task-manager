export interface TaskTrack {
	title: string;
	Id: string;
	status: string,
	taskList: TaskList[];
}

interface TaskList {
	title: string;
	Id: string;
	status: string,
	description: string;
	users: string[]
}