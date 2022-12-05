import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctors } from './doctors';

@Injectable({
  providedIn: 'root'
})

export class ConectionApisService {

  private baseUrlDctors = "http://localhost:8080/medico";

  constructor(private HttpClient: HttpClient) { }

  getDoctorList(): Observable<Doctors[]>{
    return this.HttpClient.get<Doctors[]>(`${this.baseUrlDctors}`);
  }
}
