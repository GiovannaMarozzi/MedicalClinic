import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FormDoctorsComponent } from "./form-doctors/form-doctors.component";
import { FormPatientComponent } from "./form-patient/form-patient.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'formDoctor', component: FormDoctorsComponent},
    { path: 'formPatient', component: FormPatientComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);