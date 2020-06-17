import { EditReminderComponent } from './../../dialogs/edit-reminder/edit-reminder.component';
import { IReminder } from './../../interfaces/reminder.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reminder-block',
  templateUrl: './reminder-block.component.html',
  styleUrls: ['./reminder-block.component.scss']
})
export class ReminderBlockComponent implements OnInit {
  @Input() reminder: IReminder;
  @Input() index: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  setWidth() {
    const calendar = document.getElementById('calendar');
    return calendar.offsetWidth;
  }

  viewInfo() {
    this.dialog.open(EditReminderComponent, {
      width: '400px',
      disableClose: true,
      data: {reminder: this.reminder}
    });
  }

}
