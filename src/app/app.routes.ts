import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./main/main.component').then((mod) => mod.MainComponent),
  },
  {
    path: 'arts',
    loadComponent: () =>
      import('./arts/arts.component').then((mod) => mod.ArtsComponent),
  },
];
