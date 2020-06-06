import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { ReplaySubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { taskTracks } from './../mock-data/task-data';

@Injectable({
	providedIn: 'root'
})
export class TasksService {

	private taskTracks;

	private taskTracksSource$ = new ReplaySubject();
	taskList$ = this.taskTracksSource$.asObservable();

	constructor(
		private _sessionStorageService: SessionStorageService
	) {
		this.taskTracks = taskTracks;
	}

	getTracksData() {
		if (this.isDataPresentInStorage())
			return this.getDataFromStorage();
		return this.taskTracks;
	}

	getDataFromStorage() {
		return this._sessionStorageService.retrieve('taskTracks');
	}

	isDataPresentInStorage() {
		return this._sessionStorageService.retrieve('taskTracks') !== null;
	}

	addTaskStorage(taskTracks) {
		this._sessionStorageService.store('taskTracks', taskTracks);
	}

	addTask(task) {
		this.taskTracks = this.getTracksData();
		this.taskTracks[0].taskList.push({ ...task, Id: uuidv4() });
		return this.taskTracks;
	}

	removeTask(taskToBeRemoved) {
		const trackIndex = this.taskTracks.findIndex(track => {
			return track.status === taskToBeRemoved.status;
		});
		const taskList = this.taskTracks[trackIndex].taskList.filter(task => {
			return task.Id !== taskToBeRemoved.Id;
		});
		this.taskTracks[trackIndex].taskList = [...taskList];
		this.addTaskStorage(this.taskTracks);
	}

	updateTaskStatus(taskId, status) {
		const trackIndex = this.taskTracks.findIndex(track => {
			return track.status === status;
		});
		const newTaskList = this.taskTracks[trackIndex].taskList.map(task => {
			if (taskId === task.Id) {
				task.status = status;
				return task;
			}
			return task;
		});
		this.taskTracks[trackIndex].taskList = newTaskList;
	}
}
