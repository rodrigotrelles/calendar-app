import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRemindersComponent } from './view-all-reminders.component';

describe('ViewAllRemindersComponent', () => {
  let component: ViewAllRemindersComponent;
  let fixture: ComponentFixture<ViewAllRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllRemindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
