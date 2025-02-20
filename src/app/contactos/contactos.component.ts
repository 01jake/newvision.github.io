// contactos.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactos', //  <---  ¡Asegúrate de que esto esté aquí!
  imports: [RouterModule], // Importa aquí las dependencias de este componente
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
  standalone: true,

})
export class ContactosComponent { 
   @ViewChild('miElemento') miElemento!: ElementRef; // Para acceder a un elemento del DOM
  
    ngAfterViewInit() {
     
      this.miFuncionJavaScript();
    }
  
    miFuncionJavaScript() {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
          contactForm.addEventListener('submit', function(event) {
              event.preventDefault(); // Evita el envío del formulario por defecto
  
              let nombreElement = document.getElementById('nombre');
              let apellidoElement = document.getElementById('apellido');
              let emailElement = document.getElementById('email');
              let direccionElement = document.getElementById('direccion');
              let telefonoElement = document.getElementById('telefono') as HTMLInputElement;
              let servicioElement = document.getElementById('servicio') as HTMLInputElement;
              let mensajeElement = document.getElementById('mensaje') as HTMLTextAreaElement;

              let nombre = nombreElement ? (nombreElement as HTMLInputElement).value.trim() : '';
              let apellido = apellidoElement ? (apellidoElement as HTMLInputElement).value.trim() : '';
              let email = emailElement ? (emailElement as HTMLInputElement).value.trim() : '';
              let direccion = direccionElement ? (direccionElement as HTMLInputElement).value.trim() : '';
              let telefono = telefonoElement ? telefonoElement.value.trim() : '';
              let servicio = servicioElement ? servicioElement.value.trim() : '';
              let mensaje = mensajeElement ? mensajeElement.value.trim() : '';
  
              if (!nombre || !apellido || !email || !direccion || !telefono) {
                  alert('Por favor, complete todos los campos obligatorios.');
                  return;
              }
  
              let whatsappMessage = `Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nDirección: ${direccion}\nTeléfono: ${telefono}\nServicio: ${servicio}\nMensaje: ${mensaje}`;
              let whatsappURL = `https://wa.me/526623645921?text=${encodeURIComponent(whatsappMessage)}`;
  
              window.open(whatsappURL, '_blank'); // Abre el enlace de WhatsApp en una nueva pestaña
          });
      }
    }

}