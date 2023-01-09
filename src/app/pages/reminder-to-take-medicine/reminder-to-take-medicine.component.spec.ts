import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderToTakeMedicineComponent } from './reminder-to-take-medicine.component';

describe('ReminderToTakeMedicineComponent', () => {
  let component: ReminderToTakeMedicineComponent;
  let fixture: ComponentFixture<ReminderToTakeMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderToTakeMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderToTakeMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
