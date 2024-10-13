import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Game } from '../models/game';
import { games } from '../fixtures/games';

@Injectable({
  providedIn: 'root',
})
export class GameApiService {
  constructor() {}

  public getGames(): Observable<Game[]> {
    return of(games);
  }

  public getGamesItem(id: number): Observable<Game> {
    const item: Game | undefined = games.find((el) => el.id === id);
    return item !== undefined ? of(item) : throwError(() => 'Not found!');
  }
}
