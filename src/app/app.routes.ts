import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'service-detail',
    loadComponent: () =>
      import('./features/service-detail/service-detail.component').then(
        (m) => m.ServiceDetailComponent,
      ),
  },
  {
    path: 'service-form',
    loadComponent: () =>
      import('./features/service-form/service-form.component').then((m) => m.ServiceFormComponent),
  },
];
