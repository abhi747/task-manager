import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppComponent } from './app.component';
import { TaskTrackComponent } from './task-track/task-track.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { TasksDashboardComponent } from './tasks-dashboard/tasks-dashboard.component';
import { TasksMetadataComponent } from './tasks-metadata/tasks-metadata.component';


@NgModule({
	declarations: [
		AppComponent,
		TaskTrackComponent,
		TaskItemComponent,
		SidebarComponent,
		HeaderComponent,
		TasksDashboardComponent,
		TasksMetadataComponent,
	],
	imports: [
		BrowserModule,
		DragDropModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		NgxWebstorageModule.forRoot(),
		NgMultiSelectDropDownModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
