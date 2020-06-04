import { Component } from '@angular/core';
import { TasksService } from './shared/tasks.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface TaskTrack {
	title: string;
	id: number;
	taskList: TaskList[];
}

interface TaskList {
	title: string;
	id: number;
	description: string;
}


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	taskTracks: TaskTrack[] = [];

	constructor(private _tasksService: TasksService) {
		this.taskTracks = this._tasksService.taskTracks;
	}

	drop(event: CdkDragDrop<any[]>, listType) {
		//	console.log(event.previousContainer.data[event.previousIndex]);
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
			console.log(listType);
		}
	}

	hack(value) {
		console.log(Array.from(value.taskList))
		return Array.from(value.taskList);
	}
}
