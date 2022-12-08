import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConectionApisService } from '../conection-apis.service';
import { Patient } from '../model/patients/patient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.css']
})
export class FormPatientComponent {
  patient!: Patient[];
  jsonPatient!: FormGroup;
  endereco: any; 

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

  public cpf: any;
    updatePatient(cpf: String) {
        console.log(cpf)  
      }
}
