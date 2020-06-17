import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderBlockComponent } from './reminder-block.component';

describe('ReminderBlockComponent', () => {
  let component: ReminderBlockComponent;
  let fixture: ComponentFixture<ReminderBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
