import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [RouterModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
  standalone: true
})
export class PrincipalComponent {
  @ViewChild('miElemento') miElemento!: ElementRef; // Para acceder a un elemento del DOM

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngAfterViewInit() {
    this.miFuncionJavaScript();
  }

  miFuncionJavaScript() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 3000); // Cambia de imagen cada 3 segundos

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
  }
}