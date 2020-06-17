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


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CalendarComponent,
    AddReminderButtonComponent,
    CalendarBlockComponent,
    NewReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
