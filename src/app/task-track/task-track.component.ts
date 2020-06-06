import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-task-track',
	templateUrl: './task-track.component.html',
	styleUrls: ['./task-track.component.scss'],
})
export class TaskTrackComponent implements OnInit {
	@Input() taskList;

	constructor() { }

	ngOnInit(): void {
	}

	taskId(task) {
		return task.Id;
	}


}
