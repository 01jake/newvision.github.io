import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-principal',
  imports: [RouterModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
  standalone: true
})
export class PrincipalComponent {
  @ViewChild('miElemento') miElemento!: ElementRef; // Para acceder a un elemento del DOM

  ngAfterViewInit() {
   
    this.miFuncionJavaScript();
  }

  miFuncionJavaScript() {
    // Aquí puedes escribir tu código JavaScript
    document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('.producto-card');
  
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, {
          threshold: 0.1
      });
  
      cards.forEach(card => {
          observer.observe(card);
      });
  });
  document.addEventListener('DOMContentLoaded', function() {
      const carouselItems = document.querySelectorAll('.carousel-item');
      let currentIndex = 0;
  
      function showNextSlide() {
          carouselItems[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % carouselItems.length;
          carouselItems[currentIndex].classList.add('active');
      }
  
      setInterval(showNextSlide, 5000); // Cambia de imagen cada 5 segundos
  });
  
  }
}
