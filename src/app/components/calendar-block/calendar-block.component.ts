import { RemoveAllRemindersComponent } from './../../dialogs/remove-all-reminders/remove-all-reminders.component';
import { ReminderService } from './../../services/reminder.service';
import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar-block',
  templateUrl: './calendar-block.component.html',
  styleUrls: ['./calendar-block.component.scss']
})
export class CalendarBlockComponent implements OnInit {
  @Input() day: moment.Moment;

  constructor(
    public calendarService: CalendarService,
    public reminderService: ReminderService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  dayOfOtherMonth(day: moment.Moment, currentMonth: moment.Moment) {
    return day.format('M') !== currentMonth.format('M');
  }

  isWeekend(day: moment.Moment) {
    return (day.weekday() === 0) || (day.weekday() === 6);
  }

  today(day: moment.Moment) {
    return day.format('D MM YYYY') === moment().format('D MM YYYY');
  }

  atLeastOneReminder() {
    return this.reminderService.reminders.some(el => el.date.date() === this.day.date());
  }

  deleteAllReminders() {
    this.dialog.open(RemoveAllRemindersComponent, {
      width: '350px',
      data: { day: this.day }
    });
  }
}
