import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskapiComponent } from './taskapi.component';

describe('TaskapiComponent', () => {
  let component: TaskapiComponent;
  let fixture: ComponentFixture<TaskapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
