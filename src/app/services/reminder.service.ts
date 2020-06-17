import { IReminder } from './../interfaces/reminder.model';
import { Injectable } from '@angular/core';
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
  ) { }

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
}
