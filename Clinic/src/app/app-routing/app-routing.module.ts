import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormPatientComponent } from '../form-patient/form-patient.component';
import { FormDoctorsComponent } from '../form-doctors/form-doctors.component';
import { SchedulesComponent } from '../schedules/schedules.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch:'full'},
    { path: 'formDoctor', component: FormDoctorsComponent},
    { path: 'formPatient', component: FormPatientComponent},
    { path: 'schedules', component: SchedulesComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
