import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConectionApisService } from 'src/app/conection-apis.service';
import { Doctors } from 'src/app/model/doctors/doctors';

@Component({
  selector: 'app-informations-doctors',
  templateUrl: './informations-doctors.component.html',
  styleUrls: ['./informations-doctors.component.css']
})
export class InformationsDoctorsComponent implements OnInit {

  doctor!: Doctors[];

  day: any; //Para a geração de dias do mês
  month: any; //Para a geração de mês (até o mês de Março = 3)
  hour: any; //Para a geração de horas
  minutes: any; //Para a geração de minutos
  
  constructor(private connectionApiService: ConectionApisService){}
  
  ngOnInit(): void {
    this.getDoctors()
  }

  private getDoctors(){
    
    this.day = Math.floor(Math.random() * 30 +1) 
    this.month = Math.floor(Math.random() * 3 + 1) 

    this.hour = Math.floor(Math.random() * 10+7)
    this.minutes = Math.floor(Math.random() * 59)


    const data = this.day+"/"+this.month+"/"+23
    const hours = this.hour+":"+this.minutes
    
    this.connectionApiService.getDoctorList().subscribe(x =>{
      this.doctor = x
      
      this.doctor.forEach(y =>{
        y.data = data
        y.hora = hours
      })
    }),
    (error: HttpErrorResponse) => {
      alert(error.message) 
    };
  }

}
