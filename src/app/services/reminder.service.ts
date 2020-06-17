import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IReminder } from '../interfaces/reminder.model';
import { SnackbarService } from './snackbar.service';

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
    this.remindersSource.next([...this.reminders, reminder]);
    this.snackbarService.openSnackBar('Reminder added successfully', 5000);

    console.log(this.reminders);
  }

  removeReminder(id: string) {
    const newReminders  = this.reminders.filter(reminder => reminder.id !== id);
    this.remindersSource.next(newReminders);
  }
}
