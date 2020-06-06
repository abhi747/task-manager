import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksMetadataComponent } from './tasks-metadata.component';

describe('TasksMetadataComponent', () => {
  let component: TasksMetadataComponent;
  let fixture: ComponentFixture<TasksMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
