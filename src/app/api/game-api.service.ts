import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../models/game';
import { games } from '../fixtures/games';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {
  constructor() { }

  public getGames(): Observable<Game[]> {
    return of(games);
  }
}
