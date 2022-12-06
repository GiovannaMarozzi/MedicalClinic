import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConectionApisService } from '../conection-apis.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.css']
})
export class FormPatientComponent {
  patient!: Patient[];

  constructor(private connectionApiService: ConectionApisService){}

  ngOnInit(): void{
    this.getPatients();
}

  private getPatients(){
    this.connectionApiService.getPatientList().subscribe(data =>{
      this.patient = data
    }),
    (error: HttpErrorResponse) => {
      alert(error.message) 
    };
    
  }
}
