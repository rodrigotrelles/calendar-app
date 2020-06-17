import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReminderButtonComponent } from './add-reminder-button.component';

describe('AddReminderButtonComponent', () => {
  let component: AddReminderButtonComponent;
  let fixture: ComponentFixture<AddReminderButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReminderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReminderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
