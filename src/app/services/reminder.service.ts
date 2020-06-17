import { Injectable } from '@angular/core';
import { IReminder } from './../interfaces/reminder.model';
import { BehaviorSubject } from 'rxjs';
import { SnackbarService } from './snackbar.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private remindersSource = new BehaviorSubject<IReminder[]>([]);
  public readonly reminders$ = this.remindersSource.asObservable();

  constructor(
    private snackbarService: SnackbarService
  ) {

    const reminder: IReminder = {
      id: '1',
      text: 'Prueba',
      color: '#67db86',
      allday: false,
      city: 'Montevideo',
      date:  moment('2020-06-17').add(10, 'hours'),
      time: '10:00'
    };

    this.addReminder(reminder);

  }

  get reminders(): IReminder[] {
    return this.remindersSource.getValue();
  }

  addReminder(reminder: IReminder) {
    const newList = [...this.reminders, reminder];
    const sortedList = this.sortReminders(newList);
    this.remindersSource.next(sortedList);
    this.snackbarService.openSnackBar('Reminder added successfully', 5000);
  }

  sortReminders(list: IReminder[]) {
    // tslint:disable-next-line: max-line-length
    return list.sort((a, b) => (a.date.unix() > b.date.unix()) ? 1 : (a.date.unix() === b.date.unix()) ? ((a.allday === b.allday) ? 0 : a.allday ? -1 : 1) : -1);
  }

  removeReminder(id: string) {
    const newReminders = this.reminders.filter(reminder => reminder.id !== id);
    this.remindersSource.next(newReminders);
  }

  displayReminder(reminder: IReminder, day: moment.Moment) {
    const reminderDate = moment(reminder.date, 'MM/D/YYYY');
    const dayDate = moment(day, 'MM/D/YYYY');
    return reminderDate.isSame(dayDate, 'date');
  }

  editReminder(reminder: IReminder) {
    const edited = this.reminders.find(r => r.id === reminder.id);
    edited.text = reminder.text;
    edited.color = reminder.color;
    edited.allday = reminder.allday;
    edited.city = reminder.city;
    edited.time = reminder.time;
    edited.date = reminder.date;
    const sortedList = this.sortReminders([...this.reminders]);
    this.remindersSource.next(sortedList);
    this.snackbarService.openSnackBar('Reminder edited successfully', 5000);
  }
}
