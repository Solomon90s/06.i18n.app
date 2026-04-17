import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    title: 'Listado de productos',
    loadComponent: () => import('./pages/products/products'),
  },
  {
    path: 'basic',
    title: 'Plan básico',
    loadComponent: () => import('./pages/basic-plan/basic-plan'),
  },
  {
    path: 'premium',
    title: 'Plan premium',
    loadComponent: () => import('./pages/premium-plan/premium-plan'),
  },
  {
    path: 'ultimate',
    title: 'Plan ultimate',
    loadComponent: () => import('./pages/ultimate-plan/ultimate-plan'),
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
