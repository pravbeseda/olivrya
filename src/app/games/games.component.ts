import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardComponent } from '../ui/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'olivrya-games',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent {
  public games: unknown[] = Array(5);
}
