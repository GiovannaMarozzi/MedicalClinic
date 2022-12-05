import { ConectionApisService } from './../conection-apis.service';
import { Doctors } from './../doctors';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctors',
  templateUrl: './form-doctors.component.html',
  styleUrls: ['./form-doctors.component.css']
})
export class FormDoctorsComponent implements OnInit {
    doctor!: Doctors[];

    constructor(private connectionApiService: ConectionApisService){}

    ngOnInit(): void{
        this.getDoctors();
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
