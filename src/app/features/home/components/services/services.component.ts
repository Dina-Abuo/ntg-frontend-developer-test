import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule, CarouselModule, TagModule, CommonModule],
  template: `
    <section class="services-section" [ngClass]="classBackgroundColor()">
      <div class="container">
        <div class="row d-flex justify-content-between  mb-5">
          <div class="col-lg-8">
            <h2 class="elm-section__title">{{ 'SERVICES.TITLE' | translate }}</h2>
            <p class="text-muted lead">{{ 'SERVICES.DESC' | translate }}</p>
          </div>
          <div class="col-lg-2">
            <button class="elm-btn-outline">{{ 'SERVICES.VIEW_ALL' | translate }}</button>
          </div>
        </div>

        <p-carousel
          [value]="services"
          [numVisible]="4"
          [numScroll]="1"
          [circular]="true"
          [responsiveOptions]="responsiveOptions"
        >
          <ng-template let-service pTemplate="item">
            <div class="service-card m-2 bg-white p-4 border rounded-3 position-relative">
              <div class="check-circle-icon mb-4">
                <img src="stat-icon.svg" alt="stat icon" class="text-secondary" />
              </div>
              <h4 class="mb-3 card-title">{{ 'SERVICES.CARD.TITLE' | translate }}</h4>
              <p class="text-muted mb-4 small">{{ 'SERVICES.CARD.DESC' | translate }}</p>

              <div class="tags d-flex gap-2 mb-4">
                <p-tag
                  [value]="'SERVICES.CARD.TAG3' | translate"
                  severity="secondary"
                  class="tag-pill"
                ></p-tag>
                <p-tag
                  [value]="'SERVICES.CARD.TAG2' | translate"
                  severity="info"
                  class="tag-pill-info"
                ></p-tag>
                <p-tag
                  [value]="'SERVICES.CARD.TAG1' | translate"
                  severity="success"
                  class="tag-pill-success"
                ></p-tag>
              </div>

              <div class="d-flex gap-2 mt-auto">
                <button class="btn elm-btn-outline">
                  {{ 'SERVICES.CARD.SECONDARY' | translate }}
                </button>
                <button class="btn elm-btn-primary">
                  {{ 'SERVICES.CARD.ACTION' | translate }}
                </button>
              </div>
            </div>
          </ng-template>
        </p-carousel>
      </div>
    </section>
  `,
  styles: [
    `
      .services-section {
        padding: 80px 0;
      }
      .service-card {
        min-height: 280px;
        display: flex;
        flex-direction: column;
        transition: box-shadow 0.3s ease;
        &:hover {
          box-shadow: var(--elm-shadow);
        }
      }
      .check-circle-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--elm-tag-background-success-light);
      }
      :host ::ng-deep .tag-pill-info,
      :host ::ng-deep .tag-pill-success,
      :host ::ng-deep .tag-pill {
        font-size: 0.7rem;
        border-radius: 4px;
      }
      :host ::ng-deep .tag-pill-info {
        border: 1px solid var(--elm-tag-border-info-light) !important;
      }

      :host ::ng-deep .tag-pill-success {
        border: 1px solid var(--elm-tag-border-success-light) !important;
      }
      :host ::ng-deep .tag-pill {
        background: #f2f2f2 !important;
        color: #666 !important;
        border: 1px solid #ddd;
      }
    `,
  ],
})
export class ServicesComponent {
  classBackgroundColor = input<string>('');
  services = [1, 2, 3, 4, 5, 6]; // Mock data

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];
}
