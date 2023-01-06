import { Component, Injectable, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationsDoctorsComponent } from './informations-doctors/informations-doctors.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConectionApisService } from '../conection-apis.service';
import { PatientForm } from '../model/patients/patientForm';
import { FormSchedules } from './form-schedules';
import { Doctors } from '../model/doctors/doctors';
import { HttpErrorResponse } from '@angular/common/http';


declare var $: any;

export interface Especialidades {
  [x: string]: any;
}

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})


export class SchedulesComponent {

  jsonConsult!: FormGroup;

  public cpf: any;

  patientFormById!: PatientForm[];
  consults!: FormSchedules[]
  
  id: number[] = [];

  especialidades!: FormGroup;

  doctor!: Doctors[];  

  especialidade!: any;

  @Input() nameDoctor: any;

  constructor(private connectionApiService: ConectionApisService, public dialog: MatDialog, private FormBuilder: FormBuilder, private informations: InformationsDoctorsComponent) {}

  ngOnInit(): void{
    $("[name='active']").click(function(){
      var cont = $("[name='active']:checked").length;
      $("#inlineFormCustomSelectPref").prop("disabled", cont ? false : true);
   });
   this.createJsonConsult();
   this.getConsults();
}

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  public openDialog(espec: any) {
    const dialog = this.dialog.open(InformationsDoctorsComponent); 
    this.namesDoctors(espec)
  }

  namesDoctors(especialidade: any){
    var espec;
    this.connectionApiService.getDoctorList().subscribe(x =>{
    this.doctor = x

    this.doctor.forEach(x => {
      espec = x.especialidade
      
      if(especialidade == espec){
        this.id.push(x.id)
      }
    })

    const sort = Math.floor(Math.random() * this.id.length);

    // console.log(this.id[sort]); // resultado aleatório

      this.doctor.forEach(w =>{
        if(this.id[sort] == w.id){
          this.nameDoctor = w.nome;
        }
      })
   })   
  }

  
  createJsonConsult(){
    var nameDoctor = this.nameDoctor
    this.jsonConsult = this.FormBuilder.group({
      nome: [null],
      cpf: [null],
      doutor: [nameDoctor],
      convenio: [null],
      especialidade: [null],
      data: [null],
      hora: [null]
    })
  }

  pesquisar(cpf: String){
    this.connectionApiService.getPatientListById(cpf).subscribe(data =>{
      this.patientFormById = data
      this.informacoes();
    })
  }

  informacoes(){
    this.patientFormById.forEach(x =>{
      alert("Nome: " + x.nome +"\n"
          + "CPF: "+x.cpf +"\n" 
          + "E-mail: "+x.email+"\n"
          + "Telefone ou Celular: "+x.telefone)
    })
  }

  createAgend(){
    this.connectionApiService.createAgendamento(this.jsonConsult.value).subscribe(data => {
      this.getConsults();
      alert("Consuta cadastrada com sucesso")
    }),alert("Erro ao cadastrar consulta")
    }

  getConsults(){
    this.connectionApiService.getAgendamento().subscribe(data =>{
      this.consults = data
    })
  }
}
