import { ReminderService } from './../../services/reminder.service';
import { MaterialModule } from './../../modules/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReminderComponent } from './new-reminder.component';
import { MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Observable, of } from 'rxjs';
import * as moment from 'moment';

describe('NewReminderComponent', () => {
  let component: NewReminderComponent;
  let service: ReminderService;
  let fixture: ComponentFixture<NewReminderComponent>;
  let de: DebugElement;

  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewReminderComponent],
      imports: [
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatSnackBarModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
        {
          provide: MatDialogRef,
          useValue: dialogMock
        },
        MatDialog,
        ReminderService
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReminderComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    service = de.injector.get(ReminderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new reminder', async () => {
    const testForm = {
      value: {
        text: 'New reminder text',
        color: '#4287f5',
        date: moment()
      },
      valid: true
    } as NgForm;
    component.createReminder(testForm);
    expect(service.reminders.length).toBe(1);
  });

  it('should not add a new reminder if text lenght is greater than 30 characters', async () => {
    const testForm = {
      value: {
        text: 'This is a new reminder text with more thant 30 characters',
        color: '#4287f5',
        date: moment()
      },
      valid: true
    } as NgForm;
    component.createReminder(testForm);
    expect(service.reminders.length).toBe(0);
  });

  it('should not add a new reminder if text is empty', async () => {
    const testForm = {
      value: {
        text: '',
        color: '#4287f5',
        date: moment()
      },
      valid: true
    } as NgForm;
    component.createReminder(testForm);
    expect(service.reminders.length).toBe(0);
  });

  it('should not add a new reminder if selected city is empty', async () => {
    const testForm = {
      value: {
        text: '',
        color: '#4287f5',
        date: moment()
      },
      valid: true
    } as NgForm;
    component.selectedCity = null;
    component.createReminder(testForm);
    expect(service.reminders.length).toBe(0);
  });

  it('should not add a new reminder if selected time is empty', async () => {
    const testForm = {
      value: {
        text: '',
        color: '#4287f5',
        date: moment()
      },
      valid: true
    } as NgForm;
    component.selectedTime = null;
    component.createReminder(testForm);
    expect(service.reminders.length).toBe(0);
  });

  it('should not add a new reminder if date is null', async () => {
    const testForm = {
      value: {
        text: '',
        color: '#4287f5',
        date: null
      },
      valid: true
    } as NgForm;
    component.createReminder(testForm);
    expect(service.reminders.length).toBe(0);
  });
});
