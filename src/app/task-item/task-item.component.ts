import { Component, OnInit, Input, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { TasksService } from './../shared/tasks.service';
import { Task } from './models/task-item';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
	@Input() task: Task;
	@Input() last: Task;
	modalRef: NgbModalRef;
	constructor(
		private _taskService: TasksService,
		private _modalService: NgbModal
	) { }

	ngOnInit(): void {
	}

	removeTask(task): void {
		this._taskService.removeTask(task);
	}

	openTaskModal(content: TemplateRef<any>): void {
		this.modalRef = this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
}
