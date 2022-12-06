import { Patient } from './model/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctors } from './model/doctors';

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
}
