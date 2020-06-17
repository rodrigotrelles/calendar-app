import { IReminder } from 'src/app/interfaces/reminder.model';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReminderService } from 'src/app/services/reminder.service';
import { NgForm } from '@angular/forms';
import { time } from 'src/app/constants/time';
import { cities } from '../../constants/cities';

@Component({
  selector: 'app-edit-reminder',
  templateUrl: './edit-reminder.component.html',
  styleUrls: ['./edit-reminder.component.scss']
})
export class EditReminderComponent implements OnInit {
  @ViewChild('f', { static: false }) f;

  public time = time;
  public cities = cities;
  public selectedTime: string;
  public selectedCity: string;
  public allday: boolean;
  public reminder: IReminder;

  constructor(
    public dialogRef: MatDialogRef<EditReminderComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private reminderService: ReminderService
  ) { }

  ngOnInit() {
    this.fillForm();
  }

  fillForm() {
    setTimeout(() => {
      this.reminder = this.data.reminder;
      this.selectedTime = this.reminder.time;
      this.selectedCity = this.reminder.city;
      this.allday = this.reminder.allday;
      const reminder = {
        text: this.reminder.text,
        color: this.reminder.color,
        date: this.reminder.date,
      };
      this.f.form.setValue(reminder);
    }, 0);
  }

  editReminder(f: NgForm) {
    const date = f.value.date as moment.Moment;
    if (!this.allday) {
      const timeData = this.selectedTime.split(':');
      date.add(timeData[0], 'hours').add(timeData[1], 'minutes');
      if (date === this.reminder.date) {
        const previousTimeData = this.reminder.time.split(':');
        date.add(-previousTimeData[0], 'hours').add(-previousTimeData[1], 'minutes');
      }
    }
    if (f.valid) {
      const reminder: IReminder = {
        id: this.reminder.id,
        text: f.value.text,
        city: this.selectedCity,
        color: f.value.color,
        date,
        time: this.selectedTime,
        allday: this.allday
      };
      this.reminderService.editReminder(reminder);
      this.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  deleteReminder() {
    this.reminderService.removeReminder(this.reminder.id);
    this.dialogRef.close();
  }
}
