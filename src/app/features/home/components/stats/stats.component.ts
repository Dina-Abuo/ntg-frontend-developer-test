import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [TranslateModule],

  template: `
    <section class="stats-section">
      <div class="container py-5">
        <div class="row d-flex justify-content-between mb-5">
          <div class="col-lg-8">
            <h2 class="section-title mb-3">{{ 'WHO_WE_ARE.TITLE' | translate }}</h2>
            <p class="text-muted lead">{{ 'WHO_WE_ARE.DESC' | translate }}</p>
          </div>
          <div class="col-lg-2">
            <button class="elm-btn-outline">{{ 'WHO_WE_ARE.CTA' | translate }}</button>
          </div>
        </div>

        <div class="row g-4">
          @for (stat of stats; track $index) {
            <div class="col-6 col-md-3">
              <div class="stat-card">
                <div class="icon-wrapper mb-3">
                  <img [src]="stat.icon" alt="stat icon" class="text-secondary" />
                </div>
                <h3 class="display-5 title">{{ stat.value }}</h3>
                <p class="text-muted text-center">{{ 'WHO_WE_ARE.STATS.LABEL' | translate }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .stats-section {
        padding: 80px 0;
      }
      .icon-wrapper {
        width: 60px;
        height: 60px;
        background: #e8f5ee;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
      .title {
        font-weight: 400;
        font-size: 48px;
        leading-trim: NONE;
        line-height: 60px;
        letter-spacing: -2%;
        text-align: center;
        color: #14573a;
      }
      .stat-card {
        padding: 20px;
        transition: transform 0.3s ease;
        &:hover {
          transform: translateY(-5px);
        }
      }
    `,
  ],
})
export class StatsComponent {
  readonly stats = [
    { icon: 'give-blood.svg', value: '1.5M' },
    { icon: 'star.svg', value: '1.5M' },
    { icon: 'add.svg', value: '1.5M' },
    { icon: 'user-group.svg', value: '1.5M' },
  ];
}
