import { IReminder } from './../../interfaces/reminder.model';
import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-reminder-tooltip',
  templateUrl: './reminder-tooltip.component.html',
  styleUrls: ['./reminder-tooltip.component.scss']
})
export class ReminderTooltipComponent implements OnInit {
  @Input() reminder: IReminder;

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  capitalizeWord(word: string) {
    return this.weatherService.capitalize(word);
  }
}
