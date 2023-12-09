import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'olivrya-layout',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public readonly navItems = [
    {
      label: 'Home',
      path: '',
    },
    {
      label: 'Arts',
      path: 'arts',
    },
  ];
}
