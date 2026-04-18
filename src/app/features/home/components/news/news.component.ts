import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section class="news-section">
      <div class="container">
        <div class="row d-flex justify-content-between mb-5">
          <div class="col-12 col-md-8">
            <h2 class="elm-section__title">{{ 'NEWS.TITLE' | translate }}</h2>
            <p class="small">{{ 'NEWS.DESC' | translate }}</p>
          </div>
          <div class="col-6 col-md-2">
            <button class="elm-btn-outline">{{ 'NEWS.VIEW_ALL' | translate }}</button>
          </div>
        </div>

        <div class="row g-4">
          @for (item of newsItems; track $index) {
            <div class="col-md-4">
              <div class="news-card bg-white border rounded-3 overflow-hidden h-100  p-3">
                <div class="news-img-wrapper rounded-3 mb-3">
                  <img
                    [src]="item.img"
                    alt="News Image"
                    class="w-100 h-100 rounded-3 object-fit-cover"
                  />
                </div>
                <div>
                  <h4 class="card-title mb-3">{{ 'NEWS.TITLE' | translate }}</h4>
                  <p class="text-muted small mb-4">{{ 'NEWS.DESC' | translate }}</p>
                  <button class="btn elm-btn-primary w-30 py-2">
                    {{ 'NEWS.READ_MORE' | translate }}
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .news-section {
        padding: 80px 0;
        background:var(--elm-white);;
      }
      .news-card {
        transition: all 0.3s ease;
        &:hover {
          transform: translateY(-5px);
          box-shadow: var(--elm-shadow);
        }
      }
      .news-img-wrapper {
        height: 200px;
        background: #eee;
      }
    `,
  ],
})
export class NewsComponent {
  newsItems = [{ img: 'flagcdn.jpg' }, { img: 'flagcdn.jpg' }, { img: 'flagcdn.jpg' }];
}
