import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameApiService } from 'src/app/api/game-api.service';
import { Game } from 'src/app/models/game';

@Injectable()
export class GameService {
  constructor(private readonly gameApiService: GameApiService) {}

  public getGames(): Observable<Game[]> {
    return this.gameApiService.getGames();
  }
}
