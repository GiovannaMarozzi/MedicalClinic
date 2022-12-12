import { Subscriber } from 'rxjs';
import { EnderecoForm } from './../model/endereco/enderecoForm';
import { DoctorsForm } from './../model/doctors/doctorsForm';
import { ConectionApisService } from './../conection-apis.service';
import { Doctors } from '../model/doctors/doctors';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArrayType, ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-doctors',
  templateUrl: './form-doctors.component.html',
  styleUrls: ['./form-doctors.component.css']
})
export class FormDoctorsComponent implements OnInit {
    doctor!: Doctors[];
    doctorForm!: FormGroup;

    doctorFormById!: DoctorsForm[];
    enderecoForm!: EnderecoForm[];

    jsonDoctor!: FormGroup;
    jsonDoctorUpdate!: FormGroup;
    endereco: any; 
    idDoctor: any;  
    public crm: any; 

    constructor(private connectionApiService: ConectionApisService, private FormBuilder: FormBuilder){
    }

    ngOnInit(): void{
        this.getDoctors(),
        this.createJsonDoctor()
        // this.createJsonDoctorUpdate(this.crm)
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

    createJsonDoctorUpdate(crm: String){
    this.jsonDoctorUpdate = this.FormBuilder.group({
        crm: [crm],
        nome: [null],
        email: [null],
        endereco: this.FormBuilder.group ({
          logradouro: [null],
          bairro: [null],
          numero: [null],
          complemento: [null],
          cidade: [null],
          uf: [null],
          cep: [null]
        })
      });
    }
    
    onSubmit(){
        console.log(this.jsonDoctor.value);
        this.saveDoctor();
    }

   saveDoctor(){
        this.connectionApiService.createDoctor(this.jsonDoctor.value).subscribe(data => {
          console.log(data)
        },
        error => console.log(error))
    }

    private getDoctors(){
      this.connectionApiService.getDoctorList().subscribe(data =>{
        this.doctor = data
      }),
      (error: HttpErrorResponse) => {
        alert(error.message) 
      };
    }

    
    updateDoctor(crm: String) {
        this.connectionApiService.getDoctorListById(crm).subscribe(data =>{
          this.doctorFormById = data
          this.createJsonEndereco()
          this.createJsonDoctorUpdate(crm)
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

    update(){
      this.connectionApiService.updateDoctor(this.jsonDoctorUpdate.value).subscribe(data => {
        console.log(data)
      }),
      (error: HttpErrorResponse) => {
        alert(error.message) 
      };
    }
  
    deleteDoctor(id: String){
      this.connectionApiService.deleteDoctor(id).subscribe(data =>{
        console.log(data)
        this.getDoctors();
      })
    }
  }
