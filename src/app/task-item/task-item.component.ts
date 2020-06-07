import { Component, OnInit, Input, ChangeDetectionStrategy, TemplateRef, OnChanges } from '@angular/core';
import { TasksService } from './../shared/tasks.service';
import { Task } from './models/task-item';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnChanges {
	@Input() task: Task;
	@Input() last: Task;
	modalRef: NgbModalRef;
	fileUrl: SafeUrl;
	constructor(
		private _domSanitizer: DomSanitizer,
		private _taskService: TasksService,
		private _modalService: NgbModal
	) { }

	ngOnChanges(): void {
		this.fileUrl = this.task.file ?
			this._domSanitizer.bypassSecurityTrustUrl(this.task.file as string) : this.task.file;
	}

	removeTask(task): void {
		this._taskService.removeTask(task);
	}

	openTaskModal(content: TemplateRef<any>): void {
		this.modalRef = this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
}
