import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Game } from 'src/app/models/game';
import { SafePipe } from 'src/app/utils/safe.pipe';
import { ButtonBackComponent } from 'src/app/ui/buttons/button-back/button-back.component';

interface GamePrepared extends Game {
  htmlPath: string;
}

@Component({
  selector: 'olivrya-games-item',
  standalone: true,
  imports: [AsyncPipe, SafePipe, RouterModule, ButtonBackComponent],
  providers: [GameService],
  templateUrl: './games-item.component.html',
  styleUrl: './games-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesItemComponent {
  public readonly gamesItem$: Observable<GamePrepared>;

  constructor(
    private readonly gameService: GameService,
    private readonly route: ActivatedRoute,
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.gamesItem$ = this.gameService
      .getGamesItem(Number(id))
      .pipe(map((item) => this.prepareGame(item)));
  }

  prepareGame(game: Game): GamePrepared {
    return {
      ...game,
      htmlPath: 'assets/games/' + game.id + '.html',
    };
  }
}
