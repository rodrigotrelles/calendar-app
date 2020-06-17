import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderViewAllComponent } from './reminder-view-all.component';

describe('ReminderViewAllComponent', () => {
  let component: ReminderViewAllComponent;
  let fixture: ComponentFixture<ReminderViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
