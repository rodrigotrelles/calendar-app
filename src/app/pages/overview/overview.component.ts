import { ReminderService } from 'src/app/services/reminder.service';
import { CalendarService } from './../../services/calendar.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    public calendarService: CalendarService,
    private reminderService: ReminderService
  ) { }

  ngOnInit(): void {
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const width = window.innerWidth;
    if (width < 500) {
      this.reminderService.maxRemindersPerBlock = 0;
    } else if (width < 600) {
      this.reminderService.maxRemindersPerBlock = 1;
    } else {
      this.reminderService.maxRemindersPerBlock = 2;
    }
  }
}
