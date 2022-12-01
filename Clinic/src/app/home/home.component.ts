import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  template:`
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
      <button type="button" class="btn btn-primary btn-lg btn-block">Sistema de Médicos</button>
      <button type="button" class="btn btn-secondary btn-lg btn-block">Sistema de Pacientes</button>
      </div>
    </div>
  </section>`
    ,
  styles:[`.hero{
    background-image: url('/assets/doctor.jpeg')!important;
    background-size: cover;
    background-position: center center;
  }`]
 
})
export class HomeComponent {

}
