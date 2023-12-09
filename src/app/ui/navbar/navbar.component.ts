import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'olivrya-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, NgbCollapseModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() navItems: NavItem[] = [];
  public isCollapsed = true;
  private readonly offcanvasService = inject(NgbOffcanvas);

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      ariaLabelledBy: 'offcanvas-basic-title',
    });
  }
}
