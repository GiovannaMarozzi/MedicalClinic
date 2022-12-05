import { ConectionApisService } from './../conection-apis.service';
import { Doctors } from './../doctors';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './form-doctors.component.html',
  styleUrls: ['./form-doctors.component.css']
})
export class FormDoctorsComponent implements OnInit {
    doctor: Doctors[] = [];

    constructor(private connectionApiService: ConectionApisService){}

    ngOnInit(): void{
    //   this.doctor =[{
    //     "id":1,
    //     "nome": "Giovanna",
    //     "email": "fyufryfhr@fgruyfghrtfgr",
    //     "crm":"2565484",
    //     "especialidade": "teste"
    //   },
    //   {"id":2,
    //   "nome": "Teste2",
    //   "email": "fyufryfhr@fgruyfghrtfgr",
    //   "crm":"defrfr545845",
    //   "especialidade": "teste2"
    // }
      
    // ];

    this.getDoctors();
    }

    private getDoctors(){
      this.connectionApiService.getDoctorList().subscribe(data =>{
        this.doctor = data
      })
    }
}
