import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { BanosComponent } from './banos/banos.component';
import { CocinaComponent } from './cocina/cocina.component';
import { PisosComponent } from './pisos/pisos.component';
import { ContactosComponent } from './contactos/contactos.component';

// Exporta las rutas para que puedan ser usadas en main.ts
export const routes: Routes = [
  { path: '', component: PrincipalComponent }, // Página principal
  { path: 'banos', component: BanosComponent },
  { path: 'cocina', component: CocinaComponent },
  { path: 'pisos', component: PisosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige rutas no encontradas al inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
