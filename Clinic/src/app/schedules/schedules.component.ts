import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationsDoctorsComponent } from './informations-doctors/informations-doctors.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



declare var $: any;

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})


export class SchedulesComponent {

  jsonConsult!: FormGroup;

  constructor(public dialog: MatDialog, private FormBuilder: FormBuilder) { }

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
      convenio: [null],
      especialidade: [null, Validators.required],
      data: [null, Validators.required],
      hora: [null, Validators.required],
    })
  }

  pesquisar(){
    alert("oiii")
  }

  teste(){
    console.log(this.jsonConsult)
  }
}
