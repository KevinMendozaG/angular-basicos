import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent  {
  
  nuevo: Personaje = {
    nombre: 'Maestro Rosgi',
    poder: 1000
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  constructor() { }


  // agregar() {

  //   if( this.nuevo.nombre.trim().length === 0 ) { return; }
  //   this.personajes.push(this.nuevo)
  //   this.nuevo = {
  //       nombre: '', 
  //       poder: 0
  //   }
  //   console.log(this.nuevo)
  // }

}
