import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="hero-section text-white d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content">
            <h1 class="display-3 mb-4">{{ 'HERO.TITLE' | translate }}</h1>
            <p class="lead mb-5 opacity-75">
              {{ 'HERO.DESC' | translate }}
            </p>
            <button class="btn btn-light btn-lg px-5 py-3 fw-bold rounded-1">{{ 'HERO.CTA' | translate }}</button>
            
          </div>
          <div class="carousel-dots d-flex justify-content-center gap-2 mt-5">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background-color: var(--elm-primary);
      min-height: 600px;
      padding: 100px 0;
      position: relative;
    }

    .hero-content {
      z-index: 2;
    }

    .carousel-dots .dot {
      width: 10px;
      height: 10px;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
      cursor: pointer;
      &.active {
        background: white;
        width: 30px;
        border-radius: 5px;
      }
    }

    .hero-placeholder {
       height: 400px;
       background: rgba(255,255,255,0.05);
       border-radius: 20px;
    }
  `]
})
export class HeroComponent {}
