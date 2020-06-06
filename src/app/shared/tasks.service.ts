import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { ReplaySubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { taskTracks } from './../mock-data/task-data';
import { TaskTrack } from './../tasks-dashboard/models/taskTrack';
import { Task } from './../task-item/models/task-item';

@Injectable({
	providedIn: 'root'
})
export class TasksService {

	private taskTracks: TaskTrack[];

	private taskTracksSource$ = new ReplaySubject();
	taskList$ = this.taskTracksSource$.asObservable();

	constructor(
		private _sessionStorageService: SessionStorageService
	) {
		this.taskTracks = taskTracks;
	}

	getTracksData(): TaskTrack[] {
		if (this.isDataPresentInStorage())
			return this.getDataFromStorage();
		return this.taskTracks;
	}

	getDataFromStorage(): TaskTrack[] {
		return this._sessionStorageService.retrieve('taskTracks');
	}

	isDataPresentInStorage(): boolean {
		return this._sessionStorageService.retrieve('taskTracks') !== null;
	}

	addTaskStorage(taskTracks: TaskTrack[]): void {
		this._sessionStorageService.store('taskTracks', taskTracks);
	}

	addTask(task: Task): TaskTrack[] {
		this.taskTracks = this.getTracksData();
		this.taskTracks[0].taskList.push({ ...task, Id: uuidv4() });
		return this.taskTracks;
	}

	removeTask(taskToBeRemoved: Task): void {
		const trackIndex = this.taskTracks.findIndex(track => {
			return track.status === taskToBeRemoved.status;
		});
		const taskList = this.taskTracks[trackIndex].taskList.filter(task => {
			return task.Id !== taskToBeRemoved.Id;
		});
		this.taskTracks[trackIndex].taskList = [...taskList];
		this.addTaskStorage(this.taskTracks);
	}

	updateTaskStatus(taskId: Task['Id'], status: string): void {
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
