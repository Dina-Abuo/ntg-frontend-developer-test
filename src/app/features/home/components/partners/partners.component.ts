import { Component, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section class="partners-section bg-light">
      <div class="container pt-5">
        <h2 class="section-title mb-5">{{ 'PARTNERS.TITLE' | translate }}</h2>

        <div class="partners-wrapper position-relative px-5">
          <button class="nav-btn prev" type="button" (click)="prev()">
            <i class="pi pi-angle-right"></i>
          </button>

          <div class="slider overflow-hidden">
            <div
              class="track d-flex gap-3"
              [style.transform]="'translateX(' + translateX() + 'px)'"
            >
              @for (p of partners; track $index) {
                <div class="partner-card bg-white border rounded p-3 text-center">
                  <img
                    src="Palm & Swords.png"
                    alt="Partner"
                    height="40"
                    class="opacity-50 grayscale"
                  />
                  <p class="small text-muted mt-2 mb-0">
                    {{ 'PARTNERS.PARTNER_LABEL' | translate }}
                  </p>
                </div>
              }
            </div>
          </div>

          <button class="nav-btn next" type="button" (click)="next()">
            <i class="pi pi-angle-left"></i>
          </button>
        </div>
        <div class="mt-5">
          <p class="small notes">تاريخ آخر تحديث: 04/12/2020 - 4:13 م بتوقيت السعودية</p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .partners-section {
        padding: 60px 0 0 0;
      }
      .partner-card {
        min-width: 120px;
        flex-shrink: 0;
      }
      .notes {
        color: var(--elm-text-default);
      }
      .grayscale {
        filter: grayscale(1);
      }
      .slider {
        overflow: hidden;
      }

      .track {
        transition: transform 0.4s ease;
      }

      .nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #ddd;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 2;
        &:hover {
          background: var(--elm-primary);
          color: white;
        }
        &.prev {
          right: 0;
        }
        &.next {
          left: 0;
        }
      }
    `,
  ],
})
export class PartnersComponent {
  partners = Array.from({ length: 20 });

  //  state
  currentIndex = signal<number>(0);

  itemWidth = 140; // عرض الكارت + gap
visibleItems = signal(9); // عدد العناصر اللي ظاهرة

  //  نحسب أقصى index
  maxIndex = computed(() => Math.max(0, this.partners.length - this.visibleItems()));

  //  نحسب الحركة
  translateX = computed(() => -this.currentIndex() * this.itemWidth);

  next() {
    if (this.currentIndex() < this.maxIndex()) {
      this.currentIndex.update((v) => v + 1);
    }
  }

  prev() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update((v) => v - 1);
    }
  }
}
