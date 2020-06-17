import { ViewAllRemindersComponent } from './../../dialogs/view-all-reminders/view-all-reminders.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reminder-view-all',
  templateUrl: './reminder-view-all.component.html',
  styleUrls: ['./reminder-view-all.component.scss']
})
export class ReminderViewAllComponent implements OnInit {
  @Input() amount: number;
  @Input() day: moment.Moment;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  seeAll() {
    this.dialog.open(ViewAllRemindersComponent, {
      width: '300px',
      disableClose: true,
      data: {day: this.day}
    });
  }

}
