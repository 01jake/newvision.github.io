import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavbarComponent } from './app/navbar/navbar.component';
import { FooterComponent } from './app/footer/footer.component';
import { PrincipalComponent } from './app/principal/principal.component';
import { ContactosComponent } from './app/contactos/contactos.component';
import { BanosComponent } from './app/banos/banos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, PrincipalComponent],
  template: `
   <app-navbar></app-navbar>
    <app-principal></app-principal>
    <app-footer></app-footer>
    
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
