import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArtService } from '../services/art.service';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Art } from 'src/app/models/art';
import { ButtonBackComponent } from 'src/app/ui/buttons/button-back/button-back.component';

@Component({
  selector: 'olivrya-arts-item',
  standalone: true,
  imports: [AsyncPipe, RouterModule, ButtonBackComponent],
  providers: [ArtService],
  templateUrl: './arts-item.component.html',
  styleUrl: './arts-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtsItemComponent {
  public readonly artsItem$: Observable<Art>;

  constructor(
    private readonly artService: ArtService,
    private readonly route: ActivatedRoute,
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.artsItem$ = this.artService.getArtsItem(Number(id));
  }
}
