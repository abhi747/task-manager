import { Component, OnInit, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { TasksService } from './../shared/tasks.service';
import { users } from './../mock-data/user-data';
import { TaskTrack } from './models/taskTrack';


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
	selectedFile: any;

	constructor(
		private _fb: FormBuilder,
		private _modalService: NgbModal,
		private _tasksService: TasksService
	) { }

	ngOnInit(): void {
		this.taskTracks = this._tasksService.getTracksData();
	}

	initTaskForm(): void {
		this.taskForm = this._fb.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			file: [],
			users: [[], Validators.required],
			status: ["todo"]
		})
	}

	openAddTaskModal(content: TemplateRef<any>): void {
		this.initTaskForm();
		this.modalRef = this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}

	addTask(): void {
		console.log(this.taskForm.value);
		this.taskTracks = this._tasksService.addTask(
			this.taskForm.value
		);
		this.modalRef.close();
	}

	readFileAsync(file): Promise<ArrayBuffer | string> {
		return new Promise((resolve, reject) => {
			let reader = new FileReader();

			reader.onload = () => {
				resolve(reader.result);
			};
			reader.onerror = reject;

			reader.readAsArrayBuffer(file);
		})
	}

	async onFileChange(event: Event): Promise<any> {
		try {
			const file = (<HTMLInputElement>event.target).files[0];
			const contentBuffer = await this.readFileAsync(file);
			console.log(contentBuffer)
		} catch (err) {
			console.log(err);
		}
	}

	trackID(track: TaskTrack): TaskTrack['Id'] {
		return track.Id;
	}

	drop(event: CdkDragDrop<any[]>, trackStatus: string): void {
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
