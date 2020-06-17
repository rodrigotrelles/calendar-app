import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditReminderComponent } from '../edit-reminder/edit-reminder.component';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-remove-all-reminders',
  templateUrl: './remove-all-reminders.component.html',
  styleUrls: ['./remove-all-reminders.component.scss']
})
export class RemoveAllRemindersComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditReminderComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private reminderService: ReminderService
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  deleteAll() {
    this.reminderService.removeAllRemindersForOneDay(this.data.day);
    this.close();
  }
}
