import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(
    public calendarService: CalendarService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.calendarService.loadCurrentMonth();
    }, 0);
  }


}
