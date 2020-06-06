import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TasksService } from './../shared/tasks.service';
import { Task } from './models/task-item';

@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
	@Input() task: Task;
	@Input() last: Task;
	constructor(
		private _taskService: TasksService
	) { }

	ngOnInit(): void {
	}

	removeTask(task): void {
		this._taskService.removeTask(task);
	}
}
