import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-task-track',
	templateUrl: './task-track.component.html',
	styleUrls: ['./task-track.component.scss']
})
export class TaskTrackComponent implements OnInit {
	@Input() taskList;

	constructor() { }

	ngOnInit(): void {
	}


}
