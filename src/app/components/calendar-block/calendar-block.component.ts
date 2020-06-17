import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-block',
  templateUrl: './calendar-block.component.html',
  styleUrls: ['./calendar-block.component.scss']
})
export class CalendarBlockComponent implements OnInit {
  @Input() day: moment.Moment;

  constructor(
    public calendarService: CalendarService
  ) { }

  ngOnInit(): void {
  }

  dayOfOtherMonth(day: moment.Moment, currentMonth: moment.Moment) {
    return day.format('M') === currentMonth.format('M') ? false : true;
  }

  isWeekend(day: moment.Moment) {
    return (day.weekday() === 0) || (day.weekday() === 6) ? true : false;
  }

  today(day: moment.Moment) {
    return day.format('D MM YYYY') === moment().format('D MM YYYY') ? true : false;
  }
}
