// contactos.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactos', //  <---  ¡Asegúrate de que esto esté aquí!
  imports: [RouterModule], // Importa aquí las dependencias de este componente
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
  standalone: true,

})
export class ContactosComponent { }