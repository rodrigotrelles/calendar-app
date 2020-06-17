import { ReminderService } from './../../services/reminder.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { IReminder } from 'src/app/interfaces/reminder.model';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.scss']
})
export class NewReminderComponent implements OnInit {
  @ViewChild('timepicker') timepicker;

  constructor(
    public dialogRef: MatDialogRef<NewReminderComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private reminderService: ReminderService
  ) { }

  ngOnInit() { }

  createReminder(f: NgForm) {
    if (f.valid) {
      const reminder: IReminder = {
        id: moment().unix().toString(),
        text: f.value.text,
        color: f.value.color ? f.value.color : this.getRandomColor(),
        date: f.value.date,
        time: String(this.timepicker.timepickerTime)
      };
      this.reminderService.addReminder(reminder);
      this.close();
    }
  }

  private getRandomColor() {
    let length = 6;
    const chars = '0123456789ABCDEF';
    let hex = '#';
    while (length--) {
      // tslint:disable-next-line: no-bitwise
      hex += chars[(Math.random() * 16) | 0];
    }
    return hex;
  }

  close(): void {
    this.dialogRef.close();
  }
}
