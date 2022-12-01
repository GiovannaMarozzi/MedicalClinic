import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  template:`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" style="padding: 1%;">Clínica Médica</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/formDoctor">Sistema de Médicos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/formPatient">Sistema de Pacientes</a>
      </li>
    </ul>
    <span class="navbar-text">
      Giovanna Machado Cipolletta Marozzi
    </span>
  </div>
</nav>`
    ,
  styles:[`.hero{
    background-image: url('/assets/doctor.jpeg')!important;
    background-size: cover;
    background-position: center center;
  }`]
 
})
export class HomeComponent {

}
