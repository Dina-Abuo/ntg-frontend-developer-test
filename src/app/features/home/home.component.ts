import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { ServicesComponent } from './components/services/services.component';
import { NewsComponent } from './components/news/news.component';
import { PartnersComponent } from './components/partners/partners.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent, 
    StatsComponent, 
    ServicesComponent, 
    NewsComponent, 
    PartnersComponent
  ],
  template: `

    <div>
      <app-hero></app-hero>
      <app-stats></app-stats>
      <app-services></app-services>
      <app-news></app-news>
      <app-partners></app-partners>
    </div>

  `,
  styles: [`
    main {
      min-height: 80vh;
    }
  `]
})
export class HomeComponent {}
