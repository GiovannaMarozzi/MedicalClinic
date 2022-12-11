import { Subscriber } from 'rxjs';
import { EnderecoForm } from './../model/endereco/enderecoForm';
import { DoctorsForm } from './../model/doctors/doctorsForm';
import { ConectionApisService } from './../conection-apis.service';
import { Doctors } from '../model/doctors/doctors';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctors',
  templateUrl: './form-doctors.component.html',
  styleUrls: ['./form-doctors.component.css']
})
export class FormDoctorsComponent implements OnInit {
[x: string]: any;
    doctor!: Doctors[];
    doctorForm!: FormGroup;

    doctorFormById!: DoctorsForm[];
    enderecoForm!: EnderecoForm[];
    enderecoForm2!: any;

    jsonDoctor!: FormGroup;
    endereco: any; 
    idDoctor: any;   

    constructor(private connectionApiService: ConectionApisService, private FormBuilder: FormBuilder){
    }

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

    public crm: any;
    updateDoctor(crm: String) {
        this.connectionApiService.getDoctorListById(crm).subscribe(data =>{
          this.doctorFormById = data
          this.createJsonEndereco()
        }),
        (error: HttpErrorResponse) => {
          alert(error.message) 
        };
      }

    createJsonEndereco(){
      this.doctorFormById.forEach(x => {
        this.enderecoForm = x.endereco
      })
    }
  }
