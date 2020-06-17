import { CalendarService } from './../../services/calendar.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    public calendarService: CalendarService
  ) { }

  ngOnInit(): void {
    this.calendarService.loadCurrentMonth();
  }

  dayOfOtherMonth(day: moment.Moment, currentMonth: moment.Moment) {
    return day.format('M') === currentMonth.format('M') ? false : true;
  }

  isWeekend(day: moment.Moment) {
    return (day.weekday() === 0) || (day.weekday() === 6) ? true : false;
  }
}
