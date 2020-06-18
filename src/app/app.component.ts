import { ReminderService } from 'src/app/services/reminder.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private reminderService: ReminderService) {
    this.reminderService.addFakeData();
  }
}
