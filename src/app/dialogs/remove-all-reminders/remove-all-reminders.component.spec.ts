import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAllRemindersComponent } from './remove-all-reminders.component';

describe('RemoveAllRemindersComponent', () => {
  let component: RemoveAllRemindersComponent;
  let fixture: ComponentFixture<RemoveAllRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAllRemindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAllRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
