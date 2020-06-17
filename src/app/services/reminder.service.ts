import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IReminder } from '../interfaces/reminder.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private remindersSource = new BehaviorSubject<IReminder[]>([]);
  public readonly reminders$ = this.remindersSource.asObservable();

  constructor() { }

  get reminders(): IReminder[] {
    return this.remindersSource.getValue();
  }

  addReminder(reminder: IReminder) {
    this.remindersSource.next([...this.reminders, reminder]);
  }

  removeReminder(id: string) {
    const newReminders  = this.reminders.filter(reminder => reminder.id !== id);
    this.remindersSource.next(newReminders);
  }
}
