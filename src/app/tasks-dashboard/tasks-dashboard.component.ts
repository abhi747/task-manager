import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { TasksService } from './../shared/tasks.service';
import { users } from './../mock-data/user-data';

interface TaskTrack {
	title: string;
	Id: number;
	taskList: TaskList[];
}

interface TaskList {
	title: string;
	Id: number;
	description: string;
	user: string[]
}
@Component({
	selector: 'app-tasks-dashboard',
	templateUrl: './tasks-dashboard.component.html',
	styleUrls: ['./tasks-dashboard.component.scss']
})
export class TasksDashboardComponent implements OnInit {
	taskTracks: TaskTrack[] = [];
	users: string[] = users;
	taskForm: FormGroup;
	modalRef: NgbModalRef;

	constructor(
		private _fb: FormBuilder,
		private _modalService: NgbModal,
		private _tasksService: TasksService
	) { }

	ngOnInit(): void {
		this.taskTracks = this._tasksService.getTracksData();
	}

	initTaskForm() {
		this.taskForm = this._fb.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			users: [[], Validators.required],
			status: ["todo"]
		})
	}

	openAddTaskModal(content) {
		this.initTaskForm();
		this.modalRef = this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}

	addTask() {
		console.log(this.taskForm.value);
		this.taskTracks = this._tasksService.addTask(
			this.taskForm.value
		);
		this.modalRef.close();
	}

	trackID(track) {
		return track.Id;
	}

	drop(event: CdkDragDrop<any[]>, trackStatus: string) {
		const taskDropped = event.previousContainer.data[event.previousIndex];
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
		}
		this._tasksService.updateTaskStatus(taskDropped.Id, trackStatus);
		this._tasksService.addTaskStorage(this.taskTracks);
	}

}
