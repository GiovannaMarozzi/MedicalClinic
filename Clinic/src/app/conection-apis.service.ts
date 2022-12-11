import { DoctorsCadForm } from './model/doctors/doctors-cad-form';
import { Doctors } from './model/doctors/doctors';
import { Patient } from './model/patients/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientsCadForm } from './model/patients/patients-cad-form';
import { DoctorsForm } from './model/doctors/doctorsForm';
@Injectable({
  providedIn: 'root'
})

export class ConectionApisService {

  private baseUrlDctors = "http://localhost:8080/medico";

  private baseUrlPatients = "http://localhost:8080/paciente";

  constructor(private HttpClient: HttpClient) { }

  getDoctorList(): Observable<Doctors[]>{
    return this.HttpClient.get<Doctors[]>(`${this.baseUrlDctors}`);
  }

  getPatientList(): Observable<Patient[]>{
    return this.HttpClient.get<Patient[]>(`${this.baseUrlPatients}`);
  }

  createDoctor(formDoctors: DoctorsCadForm): Observable<Object>{
    return this.HttpClient.post(`${this.baseUrlDctors}`, formDoctors);
  }

  createPatient(formPatient: PatientsCadForm): Observable<Object>{
    return this.HttpClient.post(`${this.baseUrlPatients}`, formPatient);
  }

  getDoctorListById(crm: String): Observable<DoctorsForm[]> {
    return this.HttpClient.get<DoctorsForm[]>(`${this.baseUrlDctors}/crm=${crm}`);
  }
}
