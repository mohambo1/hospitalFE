import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePatientComponent } from './message-patient.component';

describe('MessagePatientComponent', () => {
  let component: MessagePatientComponent;
  let fixture: ComponentFixture<MessagePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagePatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
