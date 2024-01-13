import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'olivrya-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() public title: string = '';
  @Input() public image: string = '';

  constructor() {
    // console.log(this.title, this.image);
  }
}
