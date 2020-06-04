import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { TaskTrackComponent } from './task-track/task-track.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { ToArrayPipe } from './shared/to-array.pipe';

@NgModule({
	declarations: [
		AppComponent,
		TaskTrackComponent,
		TaskItemComponent,
		ToArrayPipe
	],
	imports: [
		BrowserModule,
		DragDropModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
