import { PatientForm } from './../model/patients/patientForm';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConectionApisService } from '../conection-apis.service';
import { Patient } from '../model/patients/patient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnderecoForm } from '../model/endereco/enderecoForm';


@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.css']
})
export class FormPatientComponent {
  patient!: Patient[];
  jsonPatient!: FormGroup;
  endereco: any; 

  patientFormById!: PatientForm[];
  jsonPatientUpdate!: FormGroup;
  enderecoForm!: EnderecoForm[];
  public cpf: any;

  constructor(private connectionApiService: ConectionApisService, private FormBuilder: FormBuilder){}

  ngOnInit(): void{
    this.getPatients();
    this.createJsonPatient();
}

createJsonPatient(){
  this.jsonPatient = this.FormBuilder.group({
    nome: [null, Validators.required],
    email: [null, Validators.required],
    cpf: [null, Validators.required],
    telefone: [null, Validators.required],
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

createJsonPatientUpdate(cpf: String){
  this.jsonPatientUpdate = this.FormBuilder.group({
      cpf: [cpf],
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

savePatient(){
  this.connectionApiService.createPatient(this.jsonPatient.value).subscribe(data => {
    console.log(data)
  },
  error => console.log(error))
}

onSubmit(){
  console.log(this.jsonPatient.value);
  this.savePatient();
}

  private getPatients(){
    this.connectionApiService.getPatientList().subscribe(data =>{
      this.patient = data
    }),
    (error: HttpErrorResponse) => {
      alert(error.message) 
    };
    
  }

  updatePatient(cpf: String){
    this.connectionApiService.getPatientListById(cpf).subscribe(data =>{
      this.patientFormById = data
      this.createJsonEndereco()
      this.createJsonPatientUpdate(cpf)
    }),
    (error: HttpErrorResponse) => {
      alert(error.message) 
    };
  }

    createJsonEndereco(){
      this.patientFormById.forEach(x => {
        this.enderecoForm = x.endereco
      })
    }

    update(){
      this.connectionApiService.updatePatient(this.jsonPatientUpdate.value).subscribe(data => {
        console.log(data)
      }),
      (error: HttpErrorResponse) => {
        alert(error.message) 
      };
  }
}
