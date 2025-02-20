import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Asegúrate que la ruta es correcta
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';    // Asegúrate que la ruta es correcta

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
