import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component"; // Importa NavbarComponent

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, RouterOutlet, FooterComponent, NavbarComponent], // Añade NavbarComponent a los imports
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'NewVision';
}