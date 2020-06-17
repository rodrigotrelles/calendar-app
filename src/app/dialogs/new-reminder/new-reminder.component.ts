import { ReminderService } from './../../services/reminder.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { IReminder } from 'src/app/interfaces/reminder.model';
import { time } from '../../constants/time';
import { cities } from '../../constants/cities';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.scss']
})
export class NewReminderComponent implements OnInit {
  public time = time;
  public cities = cities;
  public selectedTime = '00:00';
  public selectedCity = 'MONTEVIDEO';
  public allday = false;

  constructor(
    public dialogRef: MatDialogRef<NewReminderComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private reminderService: ReminderService
  ) { }

  ngOnInit() { }

  createReminder(f: NgForm) {
    const date = f.value.date as moment.Moment;
    if (!this.allday) {
      const timeData = this.selectedTime.split(':');
      date.add(timeData[0], 'hours').add(timeData[1], 'minutes');
    }
    if (f.valid) {
      const reminder: IReminder = {
        id: moment().unix().toString(),
        text: f.value.text,
        city: this.selectedCity,
        color: f.value.color || this.getRandomColor(),
        date,
        time: this.selectedTime,
        allday: this.allday
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
