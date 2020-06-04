import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TasksService {
	// taskTracks = {
	// 	l1: [1, 2, 3],
	// 	l2: ["a", "b", "c"],
	// 	l3: ["@", "$", "%"]
	// }

	taskTracks = [{
		title: "todoList",
		id: 1,
		taskList: [{
			title: "Lorem ipsum dolor sit.",
			id: 1,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}, {
			title: "Lorem ipsum dolor sit.",
			id: 2,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}, {
			title: "Lorem ipsum dolor sit.",
			id: 3,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}, {
			title: "Lorem ipsum dolor sit.",
			id: 4,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}]
	}, {
		title: "inprogressList",
		id: 2,
		taskList: [{
			title: "Lorem ipsum dolor sit.",
			id: 5,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}, {
			title: "Lorem ipsum dolor sit.",
			id: 6,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}, {
			title: "Lorem ipsum dolor sit.",
			id: 7,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}, {
			title: "Lorem ipsum dolor sit.",
			id: 8,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}]
	}, {
		title: "doneList",
		id: 3,
		taskList: [{
			title: "Lorem ipsum dolor sit.",
			id: 9,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}, {
			title: "Lorem ipsum dolor sit.",
			id: 10,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}, {
			title: "Lorem ipsum dolor sit.",
			id: 11,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}, {
			title: "Lorem ipsum dolor sit.",
			id: 12,
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
		}]
	}

	]
	constructor() { }
}
