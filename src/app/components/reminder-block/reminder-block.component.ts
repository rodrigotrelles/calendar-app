import { WeatherService } from './../../services/weather.service';
import { EditReminderComponent } from './../../dialogs/edit-reminder/edit-reminder.component';
import { IReminder } from './../../interfaces/reminder.model';
import { Component, OnInit, Input, HostListener, AfterContentChecked } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reminder-block',
  templateUrl: './reminder-block.component.html',
  styleUrls: ['./reminder-block.component.scss']
})
export class ReminderBlockComponent implements OnInit, AfterContentChecked {
  @Input() reminder: IReminder;
  @Input() index: number;

  itemWidth: number;

  constructor(
    public dialog: MatDialog,
    public weatherService: WeatherService
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.setWidth();
  }

  setWidth() {
      const calendar = document.getElementById('calendar');
      this.itemWidth = calendar.offsetWidth;
  }

  viewInfo() {
    this.dialog.open(EditReminderComponent, {
      width: '400px',
      disableClose: true,
      data: { reminder: this.reminder }
    });
  }

  onMouseOver() {
    this.weatherService.getCityWeatherForDate(this.reminder.city, this.reminder.date);
  }

  onMouseOut() {
    this.weatherService.cleanForecast();
  }
}
