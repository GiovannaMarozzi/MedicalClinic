import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationsDoctorsComponent } from './informations-doctors/informations-doctors.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConectionApisService } from '../conection-apis.service';
import { PatientForm } from '../model/patients/patientForm';

declare var $: any;

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})


export class SchedulesComponent {

  jsonConsult!: FormGroup;
  public cpf: any;


  patientFormById!: PatientForm[];

  constructor(private connectionApiService: ConectionApisService, public dialog: MatDialog, private FormBuilder: FormBuilder) { }

  ngOnInit(): void{
    $("[name='active']").click(function(){
      var cont = $("[name='active']:checked").length;
      $("#inlineFormCustomSelectPref").prop("disabled", cont ? false : true);
   });

   this.createJsonConsult();
}

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  openDialog() {
    this.dialog.open(InformationsDoctorsComponent);
  }

  createJsonConsult(){
    this.jsonConsult = this.FormBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      doutor: ["teste", Validators.required],
      convenio: [null],
      especialidade: [null, Validators.required],
      data: [null, Validators.required],
      hora: [null, Validators.required],
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

  teste(){
    this.connectionApiService.createAgendamento(this.jsonConsult.value).subscribe(data => {
      console.log("foi")
    })
  }
}
