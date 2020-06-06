import { Component, OnInit, Input } from '@angular/core';
import { TaskList } from './models/task-track';

@Component({
	selector: 'app-task-track',
	templateUrl: './task-track.component.html',
	styleUrls: ['./task-track.component.scss'],
})
export class TaskTrackComponent implements OnInit {
	@Input() taskList: TaskList;

	constructor() { }

	ngOnInit(): void {
	}

	taskId(task): TaskList['Id'] {
		return task.Id;
	}


}
