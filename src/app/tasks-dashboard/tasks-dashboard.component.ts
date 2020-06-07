import { Component, OnInit, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { TasksService } from './../shared/tasks.service';
import { users } from './../mock-data/user-data';
import { TaskTrack } from './models/taskTrack';
import { UtilService } from './../shared/util.service';


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
	uploadedFileName: string;
	selectedItems = [];
	dropdownSettings: IDropdownSettings = {
		singleSelection: false,
		idField: 'item_id',
		textField: 'item_text',
		itemsShowLimit: 3,
		allowSearchFilter: true
	};


	constructor(
		private _fb: FormBuilder,
		private _modalService: NgbModal,
		private _tasksService: TasksService,
		private _utilService: UtilService
	) { }

	ngOnInit(): void {
		this.taskTracks = this._tasksService.getTracksData();
	}

	initTaskForm(): void {
		this.taskForm = this._fb.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			file: [],
			date: [Date.now()],
			users: [[], Validators.required],
			status: ["todo"]
		})
	}

	openAddTaskModal(content: TemplateRef<any>): void {
		this.initTaskForm();
		this.modalRef = this._modalService.open(content, { centered: true, size: 'md' })
	}

	addTask(): void {
		this.taskTracks = this._tasksService.addTask(
			this.taskForm.value
		);
		this.modalRef.close();
	}

	readFileAsync(file): Promise<ArrayBuffer> {
		return new Promise((resolve, reject) => {
			let reader = new FileReader();

			reader.onload = () => {
				resolve(reader.result as ArrayBuffer);
			};
			reader.onerror = reject;

			reader.readAsArrayBuffer(file);
		})
	}

	async onFileChange(event: Event): Promise<any> {
		const file = (<HTMLInputElement>event.target).files[0];
		this.uploadedFileName = file.name;
		this.taskForm.get('file').setErrors({ invalidFile: false });
		if (this._utilService.validateFileType(this.uploadedFileName)) {
			try {
				const contentBuffer: ArrayBuffer = await this.readFileAsync(file);
				const imageUrl = this._utilService.getStringFromArrayBuffer(contentBuffer);
				this.taskForm.patchValue({
					file: imageUrl
				});
			} catch (err) {
				console.error(err);
			}
		} else {
			this.taskForm.get('file').setErrors({ invalidFile: true });
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
			this._tasksService.updateTaskStatus(taskDropped.Id, trackStatus);
		}
		this._tasksService.addTaskStorage(this.taskTracks);
	}

}
