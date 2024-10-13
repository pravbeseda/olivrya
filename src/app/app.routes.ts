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
  {
    path: 'arts/:id',
    loadComponent: () =>
      import('./arts/arts-item/arts-item.component').then(
        (mod) => mod.ArtsItemComponent,
      ),
  },
  {
    path: 'games',
    loadComponent: () =>
      import('./games/games.component').then((mod) => mod.GamesComponent),
  },
  {
    path: 'games/:id',
    loadComponent: () =>
      import('./games/games-item/games-item.component').then(
        (mod) => mod.GamesItemComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./ui/error/error.component').then((mod) => mod.ErrorComponent),
  },
];
