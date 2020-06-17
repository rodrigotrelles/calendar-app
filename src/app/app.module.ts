import { MaterialModule } from './modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AddReminderButtonComponent } from './components/add-reminder-button/add-reminder-button.component';
import { CalendarBlockComponent } from './components/calendar-block/calendar-block.component';
import { NewReminderComponent } from './dialogs/new-reminder/new-reminder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { ReminderBlockComponent } from './components/reminder-block/reminder-block.component';
import { EditReminderComponent } from './dialogs/edit-reminder/edit-reminder.component';
import { RemoveAllRemindersComponent } from './dialogs/remove-all-reminders/remove-all-reminders.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CalendarComponent,
    AddReminderButtonComponent,
    CalendarBlockComponent,
    NewReminderComponent,
    CalendarHeaderComponent,
    ReminderBlockComponent,
    EditReminderComponent,
    RemoveAllRemindersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMaterialTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
