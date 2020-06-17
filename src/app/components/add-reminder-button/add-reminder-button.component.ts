import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewReminderComponent } from 'src/app/dialogs/new-reminder/new-reminder.component';

@Component({
  selector: 'app-add-reminder-button',
  templateUrl: './add-reminder-button.component.html',
  styleUrls: ['./add-reminder-button.component.scss']
})
export class AddReminderButtonComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.addReminder();
  }

  addReminder() {
    this.dialog.open(NewReminderComponent, {
      width: '400px',
      disableClose: true
    });
  }
}
