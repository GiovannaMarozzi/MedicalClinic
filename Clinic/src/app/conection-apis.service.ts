import { PatientForm } from './model/patients/patientForm';
import { DoctorsCadFormUpdate } from './model/doctors/doctors-cad-form-update';
import { DoctorsCadForm } from './model/doctors/doctors-cad-form';
import { Doctors } from './model/doctors/doctors';
import { Patient } from './model/patients/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientsCadForm } from './model/patients/patients-cad-form';
import { DoctorsForm } from './model/doctors/doctorsForm';
import { PatientCadFormUpdate } from './model/patients/patient-cad-form-update';
import { FormSchedules } from './schedules/form-schedules';

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

  getPatientListById(cpf: String): Observable<PatientForm[]> {
    return this.HttpClient.get<PatientForm[]>(`${this.baseUrlPatients}/cpf=${cpf}`);
  }

  updateDoctor(formDoctorsUpdate: DoctorsCadFormUpdate): Observable<Object>{
    return this.HttpClient.put(`${this.baseUrlDctors}`, formDoctorsUpdate)
  }

  updatePatient(formPatientUpdate: PatientCadFormUpdate): Observable<Object>{
    return this.HttpClient.put(`${this.baseUrlPatients}`, formPatientUpdate)
  }

  deleteDoctor(crm: String): Observable<Object>{
    return this.HttpClient.delete(`${this.baseUrlDctors}/crm=${crm}`)
  }

  deletePatient(cpf: String): Observable<Object>{
    return this.HttpClient.delete(`${this.baseUrlPatients}/cpf=${cpf}`)
  }

  createAgendamento(formAgend: FormSchedules):Observable<Object>{
    return this.HttpClient.post(`${this.baseUrlPatients}/cadAgendamento`, formAgend)
  }
}
