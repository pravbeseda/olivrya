import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardComponent } from '../ui/card/card.component';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';

@Component({
  selector: 'olivrya-games',
  standalone: true,
  imports: [CommonModule, CardComponent],
  providers: [GameService],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent {
  public readonly games$ = this.gameService.getGames();

  constructor(private readonly gameService: GameService) {}
}
