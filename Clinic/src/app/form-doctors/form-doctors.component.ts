import { ConectionApisService } from './../conection-apis.service';
import { Doctors } from '../model/doctos/doctors';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DoctorsCadForm } from '../model/doctos/doctors-cad-form';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators, FormArrayName } from '@angular/forms';



@Component({
  selector: 'app-doctors',
  templateUrl: './form-doctors.component.html',
  styleUrls: ['./form-doctors.component.css']
})
export class FormDoctorsComponent implements OnInit {
    doctor!: Doctors[];
    doctorForm!: FormGroup;
    cadDoctor: DoctorsCadForm = new DoctorsCadForm();

    jsonDoctor!: FormGroup;
    endereco: any;    

    constructor(private connectionApiService: ConectionApisService, private FormBuilder: FormBuilder){}

    ngOnInit(): void{
        this.getDoctors(),
        this.createJsonDoctor()
    }

    createJsonDoctor(){
      this.jsonDoctor = this.FormBuilder.group({
        nome: [null, Validators.required],
        email: [null, Validators.required],
        crm: [null, Validators.required],
        telefone: [null, Validators.required],
        especialidade: [null, Validators.required],
        endereco: this.FormBuilder.group ({
          logradouro: [null, Validators.required],
          bairro: [null, Validators.required],
          numero: [null, Validators.required],
          complemento: [null, Validators.required],
          cidade: [null, Validators.required],
          uf: [null, Validators.required],
          cep: [null, Validators.required]
        })
      });
    }

   saveDoctor(){
        this.connectionApiService.createDoctor(this.jsonDoctor.value).subscribe(data => {
          console.log(data)
        },
        error => console.log(error))
    }

    onSubmit(){
        console.log(this.jsonDoctor.value);
        this.saveDoctor();
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
