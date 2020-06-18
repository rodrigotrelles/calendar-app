import { IReminder } from 'src/app/interfaces/reminder.model';
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
  public maxRemindersPerBlock = 2;

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
    this.snackbarService.openSnackBar('Reminder removed successfully', 5000);
  }

  displayReminder(reminder: IReminder, day: moment.Moment) {
    let counter = 0;
    let display = false;
    this.reminders.forEach((r: IReminder) => {
      const rDate = moment(r.date, 'MM/D/YYYY');
      const dayDate = moment(day, 'MM/D/YYYY');
      if (rDate.isSame(dayDate, 'date')) {
        counter++;
        if (reminder.id === r.id && counter <= this.maxRemindersPerBlock) {
          display = true;
        }
      }
    });
    return display;
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

  removeAllRemindersForOneDay(day: moment.Moment) {
    const filteredList = this.reminders.filter(r => r.date.format('D/MM/yyyy') !== day.format('D/MM/yyyy'));
    this.remindersSource.next(filteredList);
    this.snackbarService.openSnackBar('Reminders removed successfully', 5000);
  }

  hiddenRemindersAmount(day: moment.Moment) {
    let counter = 0;
    this.reminders.forEach((r: IReminder) => {
      const rDate = moment(r.date, 'MM/D/YYYY');
      const dayDate = moment(day, 'MM/D/YYYY');
      if (rDate.isSame(dayDate, 'date')) {
        counter++;
      }
    });
    const hiddenReminders = counter - this.maxRemindersPerBlock;
    return hiddenReminders;
  }

  sameDay(reminder: IReminder, day: moment.Moment) {
    const rDate = moment(reminder.date, 'MM/D/YYYY');
    const dayDate = moment(day, 'MM/D/YYYY');
    return rDate.isSame(dayDate, 'date');
  }

  addFakeData() {
    const today = moment().format('YYYY-MM-D');

    const reminder: IReminder = {
      id: '1',
      text: 'Cinema',
      color: '#ffce47',
      allday: false,
      city: 'LONDON',
      date: moment(today).add(22, 'hours'),
      time: '22:00'
    };
    this.addReminder(reminder);

    const reminder2: IReminder = {
      id: '2',
      text: 'Oculist',
      color: '#99d6f2',
      allday: false,
      city: 'MONTEVIDEO',
      date: moment(today).add(1, 'day').add(10, 'hours'),
      time: '10:00'
    };

    this.addReminder(reminder2);

    const reminder3: IReminder = {
      id: '3',
      text: 'Basketball Practice',
      color: '#dcbce0',
      allday: false,
      city: 'SANTIAGO',
      date: moment(today).add(16, 'hours'),
      time: '16:00'
    };

    this.addReminder(reminder3);


    const reminder4: IReminder = {
      id: '4',
      text: 'Free day',
      color: '#e0d0bc',
      allday: true,
      city: 'PARIS',
      date: moment(today).add(11, 'hours'),
      time: '11:00'
    };

    this.addReminder(reminder4);

    const reminder5: IReminder = {
      id: '5',
      text: 'Shopping',
      color: '#ddebb5',
      allday: false,
      city: 'MONTEVIDEO',
      date: moment(today).add(2, 'days').add(15, 'hours'),
      time: '15:00'
    };

    this.addReminder(reminder5);
  }
}
