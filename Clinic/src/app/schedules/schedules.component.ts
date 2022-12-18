import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationsDoctorsComponent } from './informations-doctors/informations-doctors.component';



declare var $: any;



@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})


export class SchedulesComponent {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    $("[name='toggle']").click(function(){
      var cont = $("[name='toggle']:checked").length;
      $("#aplica").prop("disabled", cont ? false : true);
   });
}

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  openDialog() {
    this.dialog.open(InformationsDoctorsComponent);
  }

}
