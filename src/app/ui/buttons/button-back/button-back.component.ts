import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'olivrya-button-back',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button-back.component.html',
  styleUrl: './button-back.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonBackComponent {
  @Input()
  public link: string | undefined;
  
}
