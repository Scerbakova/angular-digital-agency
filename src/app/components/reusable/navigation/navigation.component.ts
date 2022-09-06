import { Component, Input } from '@angular/core';
import { Navigation } from 'src/app/data/navigation';

@Component({
  selector: 'app-navigation',
  template: `
  <ul [ngClass]="ulClass">
    <app-link
      *ngFor="let linkAndLabel of linksAndLabels"
      [link]="linkAndLabel.link"
      [label]="linkAndLabel.label"
    ></app-link>
  </ul>
  `,
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input()
  burger!: boolean;

  @Input()
  column!: boolean;

  @Input() linksAndLabels!: Navigation[];

  get ulClass(): string[] {
    const mode = this.burger ? 'navigation__list--burger' : 'navigation__list';
    const column = this.column ? 'navigation__list--column' : 'navigation__list';

    return ['navigation__list', mode, column];
  }
}
