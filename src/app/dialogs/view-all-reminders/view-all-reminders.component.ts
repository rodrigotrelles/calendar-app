import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-view-all-reminders',
  templateUrl: './view-all-reminders.component.html',
  styleUrls: ['./view-all-reminders.component.scss']
})
export class ViewAllRemindersComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewAllRemindersComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public reminderService: ReminderService
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  deleteAllReminders() {
    this.reminderService.removeAllRemindersForOneDay(this.data.day);
    this.close();
  }
}
