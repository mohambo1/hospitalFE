import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterNurseComponent } from './pages/register-nurse/register-nurse.component';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorHomeComponent } from './pages/doctor-home/doctor-home.component';

import { PatientHomeComponent } from './pages/patient-home/patient-home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TeamWorkComponent } from './pages/team-work/team-work.component';
import { PatientDataComponent } from './pages/patient-data/patient-data.component';
import { WorkingScheduleComponent } from './pages/working-schedule/working-schedule.component';
import { WorkingTimeComponent } from './pages/working-time/working-time.component';
import { NurseHomeComponent } from './pages/nurse-home/nurse-home.component';
import { WorkSheduleNurseComponent } from './pages/work-shedule-nurse/work-shedule-nurse.component';
import { PatientDataNurseComponent } from './pages/patient-data-nurse/patient-data-nurse.component';
import { TeamNurseComponent } from './pages/team-nurse/team-nurse.component';
import { UdpatetestComponent } from './pages/udpatetest/udpatetest.component';
import { MessagenurseComponent } from './pages/messagenurse/messagenurse.component';
import { ProfilenurseComponent } from './pages/profilenurse/profilenurse.component';
import { MessagePatientComponent } from './pages/message-patient/message-patient.component';
import { MedicalFileComponent } from './pages/medical-file/medical-file.component';
import { ViewTestResultComponent } from './pages/view-test-result/view-test-result.component';
import { ReminderToTakeMedicineComponent } from './pages/reminder-to-take-medicine/reminder-to-take-medicine.component';
import { BookAnAppointmentComponent } from './pages/book-an-appointment/book-an-appointment.component';
import { ViewUpcomingAppointmentComponent } from './pages/view-upcoming-appointment/view-upcoming-appointment.component';
import { SharedService } from './services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    HomeComponent,
    RegisterNurseComponent,
    RegisterPatientComponent,
    ContactUsComponent,
    DoctorHomeComponent,
   
    PatientHomeComponent,
    MessagesComponent,
    ProfileComponent,
    TeamWorkComponent,
    PatientDataComponent,
    WorkingScheduleComponent,
    WorkingTimeComponent,
    NurseHomeComponent,
    WorkSheduleNurseComponent,
    PatientDataNurseComponent,
    TeamNurseComponent,
    UdpatetestComponent,
    MessagenurseComponent,
    ProfilenurseComponent,
    MessagePatientComponent,
    MedicalFileComponent,
    ViewTestResultComponent,
    ReminderToTakeMedicineComponent,
    BookAnAppointmentComponent,
    ViewUpcomingAppointmentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
     
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
