import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TabsModule } from 'primeng/tabs';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from '../home/components/services/services.component';
import { ButtonComponent } from '../../sharde/button/button.component';
import { Router } from '@angular/router';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    TabsModule,
    RatingModule,
    FormsModule,
    ServicesComponent,
    ButtonComponent,
    TagModule,
  ],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent {
  private router = inject(Router);
  rating: number = 4;

  readonly steps = [1, 2, 3, 4, 5, 6, 7];

  navLink() {
    return this.router.navigate(['/service-form']);
  }
}
