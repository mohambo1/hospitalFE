
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAnAppointmentComponent } from './pages/book-an-appointment/book-an-appointment.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DoctorHomeComponent } from './pages/doctor-home/doctor-home.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicalFileComponent } from './pages/medical-file/medical-file.component';
import { MessagePatientComponent } from './pages/message-patient/message-patient.component';
import { MessagenurseComponent } from './pages/messagenurse/messagenurse.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { NurseHomeComponent } from './pages/nurse-home/nurse-home.component';
import { PatientDataNurseComponent } from './pages/patient-data-nurse/patient-data-nurse.component';
import { PatientDataComponent } from './pages/patient-data/patient-data.component';
import { PatientHomeComponent } from './pages/patient-home/patient-home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfilenurseComponent } from './pages/profilenurse/profilenurse.component';
import { RegisterNurseComponent } from './pages/register-nurse/register-nurse.component';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReminderToTakeMedicineComponent } from './pages/reminder-to-take-medicine/reminder-to-take-medicine.component';
import { TeamNurseComponent } from './pages/team-nurse/team-nurse.component';
import{TeamWorkComponent} from './pages/team-work/team-work.component';
import { UdpatetestComponent } from './pages/udpatetest/udpatetest.component';
import { ViewTestResultComponent } from './pages/view-test-result/view-test-result.component';
import { ViewUpcomingAppointmentComponent } from './pages/view-upcoming-appointment/view-upcoming-appointment.component';
import { WorkSheduleNurseComponent } from './pages/work-shedule-nurse/work-shedule-nurse.component';
import { WorkingScheduleComponent } from './pages/working-schedule/working-schedule.component';
import { WorkingTimeComponent } from './pages/working-time/working-time.component';




const routes: Routes = [
  
    { path: 'login-component', component: LoginComponent },
    { path: 'register-component', component: RegisterComponent },
    { path: 'register-nurse-component', component: RegisterNurseComponent },
    { path: 'patient-register-component', component: RegisterPatientComponent },
    { path: 'contact-us-component', component: ContactUsComponent },
    { path: 'doctor-home-component', component: DoctorHomeComponent },
    { path: 'doctor-home-component/doctor-profile', component: ProfileComponent},
    { path:  'doctor-home-component/doctor-message',component: MessagesComponent},
    {path: 'doctor-home-component/doctor-team',component:TeamWorkComponent},
    {path:'doctor-home-component/doctor-signout',component:HomeComponent},
    {path: 'doctor-home-component/doctor-working-shedule',component: WorkingScheduleComponent},
    {path: 'doctor-home-component/doctor-patient-data',component: PatientDataComponent},
    {path:'nurse-home-component',component:NurseHomeComponent},
    {path: 'patient-home-component',component:PatientHomeComponent},
    {path: 'nurse-home-component/work-shedule-nurse',component: WorkSheduleNurseComponent},
    {path: 'nurse-home-component/patient-data-nurse',component: PatientDataNurseComponent},
    {path: 'nurse-home-component/team-nurse',component:TeamNurseComponent},
    {path: 'doctor-home-component/doctor-working-time',component: WorkingTimeComponent},
    {path: 'nurse-home-component/updatetest',component:UdpatetestComponent},
    {path: 'nurse-home-component/messagenurse',component:MessagenurseComponent},
    {path:'nurse-home-component/profilenurse',component:ProfilenurseComponent},
    {path: 'patient-home-component',component:PatientHomeComponent},
    {path: 'patient-home-component/message-patient',component:MessagePatientComponent},
    {path: 'patient-home-component/medical-file',component:MedicalFileComponent},
    {path: 'patient-home-component/view-test-result',component:ViewTestResultComponent},
    {path:'patient-home-component/reminder-to-take-medicine',component:ReminderToTakeMedicineComponent},
    {path:'patient-home-component/book-an-appointment',component:BookAnAppointmentComponent},
    {path:'patient-home-component/view-upcoming-appointment',component:ViewUpcomingAppointmentComponent},
    
    { path:'**' , component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
