import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Importa AppComponent
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';



@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppComponent // Importa AppComponent
    ],
    providers: [],
    // bootstrap: [AppComponent] // Bootstrapea AppComponent

})
export class AppModule { }
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));