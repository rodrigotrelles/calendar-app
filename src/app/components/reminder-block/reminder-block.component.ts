import { IReminder } from './../../interfaces/reminder.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reminder-block',
  templateUrl: './reminder-block.component.html',
  styleUrls: ['./reminder-block.component.scss']
})
export class ReminderBlockComponent implements OnInit {
  @Input() reminder: IReminder;

  constructor() { }

  ngOnInit(): void {
  }

  setWidth() {
    const calendar = document.getElementById('calendar');
    return calendar.offsetWidth;
  }
}
