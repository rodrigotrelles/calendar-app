import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private currentDaysSource = new BehaviorSubject<moment.Moment[]>([]);
  public readonly currentDays$ = this.currentDaysSource.asObservable();

  private currentMonthSource = new BehaviorSubject<moment.Moment>(moment());
  public readonly currentMonth$ = this.currentMonthSource.asObservable();

  private monthCounter = 0;

  constructor() { }

  public loadCurrentMonth() {
    const days = this.getDaysArrayByMonth();
    this.currentDaysSource.next(days);
  }

  private getDaysArrayByMonth() {
    const newMonth = moment().add(this.monthCounter, 'M');
    this.currentMonthSource.next(newMonth);
    let daysInMonth = newMonth.daysInMonth();
    const arrDays = [];
    while (daysInMonth) {
      const current = newMonth.date(daysInMonth);
      arrDays.unshift(current.clone());
      daysInMonth--;
    }
    return this.addOutsideMonthDay(arrDays);
  }

  private addOutsideMonthDay(arrDays: moment.Moment[]) {
    let firstDayOfMonth = arrDays[0].weekday();
    let daysCounter = -1;
    let firstDayCounter = 0;
    while (firstDayOfMonth > 0) {
      const previousDay = arrDays[firstDayCounter].clone().add(daysCounter, 'd');
      arrDays.unshift(previousDay);
      daysCounter--;
      firstDayOfMonth--;
      firstDayCounter++;
    }
    let lastDayOfMonth = arrDays[arrDays.length - 1].weekday();
    daysCounter = 1;
    const lastDayCounter = arrDays.length - 1;
    while (lastDayOfMonth < 6) {
      const nextDay = arrDays[lastDayCounter].clone().add(daysCounter, 'd');
      arrDays.push(nextDay);
      daysCounter++;
      lastDayOfMonth++;
    }
    return arrDays;
  }

  public nextMonth() {
    this.monthCounter++;
    this.currentDaysSource.next(this.getDaysArrayByMonth());
  }

  public previousMonth() {
    this.monthCounter--;
    this.currentDaysSource.next(this.getDaysArrayByMonth());
  }

  public getDays() {
    return [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
  }

}
