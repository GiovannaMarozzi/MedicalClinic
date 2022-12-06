import { ConectionApisService } from './../conection-apis.service';
import { Doctors } from '../model/doctos/doctors';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DoctorsCadForm } from '../model/doctos/doctors-cad-form';


@Component({
  selector: 'app-doctors',
  templateUrl: './form-doctors.component.html',
  styleUrls: ['./form-doctors.component.css']
})
export class FormDoctorsComponent implements OnInit {
    doctor!: Doctors[];
    cadDoctor: DoctorsCadForm = new DoctorsCadForm();

    constructor(private connectionApiService: ConectionApisService){}

    ngOnInit(): void{
        this.getDoctors();
    }

    onSubmit(){
      console.log(this.cadDoctor)
    }

    private getDoctors(){
      this.connectionApiService.getDoctorList().subscribe(data =>{
        this.doctor = data
      }),
      (error: HttpErrorResponse) => {
        alert(error.message) 
      };
      
    }
}
