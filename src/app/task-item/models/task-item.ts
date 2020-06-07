import { SafeUrl } from '@angular/platform-browser';

export interface Task {
	title: string;
	Id: string;
	status: string,
	file?: string | SafeUrl;
	description: string;
	date: number,
	users: string[]
}