import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingAppointmentComponent } from './view-upcoming-appointment.component';

describe('ViewUpcomingAppointmentComponent', () => {
  let component: ViewUpcomingAppointmentComponent;
  let fixture: ComponentFixture<ViewUpcomingAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUpcomingAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUpcomingAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
