import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TasksService } from './../shared/tasks.service';

@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
	@Input() task;
	@Input() first;
	@Input() last;
	constructor(
		private _taskService: TasksService
	) { }

	ngOnInit(): void {
	}

	removeTask(task) {
		this._taskService.removeTask(task);
	}
}
