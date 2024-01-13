import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'olivrya-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  public title: string = '';

  @Input()
  public image: string = '';

  @Input()
  public id: number = 0;

  constructor() {
    // console.log(this.title, this.image);
  }
}
