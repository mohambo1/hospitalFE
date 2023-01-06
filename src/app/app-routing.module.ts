
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DoctorHomeComponent } from './pages/doctor-home/doctor-home.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterNurseComponent } from './pages/register-nurse/register-nurse.component';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  
    { path: 'login-component', component: LoginComponent },
    { path: 'register-component', component: RegisterComponent },
    { path: 'register-nurse-component', component: RegisterNurseComponent },
    { path: 'patient-register-component', component: RegisterPatientComponent },
    { path: 'contact-us-component', component: ContactUsComponent },
    { path: 'doctor-home-component', component: DoctorHomeComponent },
    { path: 'doctor-home-component/doctor-profile', component: ProfileComponent},
    { path:'**' , component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
