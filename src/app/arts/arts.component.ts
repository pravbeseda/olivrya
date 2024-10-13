import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArtService } from './services/art.service';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'olivrya-arts',
  standalone: true,
  imports: [AsyncPipe, CardComponent],
  providers: [ArtService],
  templateUrl: './arts.component.html',
  styleUrl: './arts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtsComponent {
  public readonly arts$ = this.artService.getArts();

  constructor(private readonly artService: ArtService) {}
}
