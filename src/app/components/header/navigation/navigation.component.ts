import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `<ul [ngClass]="ulClass">
    <app-link link="/home" label="Home"></app-link>
    <app-link link="/services" label="Services"></app-link>
    <app-link link="/project" label="Our Project"></app-link>
    <app-link link="/about" label="About us"></app-link>
  </ul>`,
  styles: [
    `
      .navigation__list {
        display: flex;
        column-gap: 40px;
      }
      .navigation__list--burger {
        position: absolute;
        top: 5%;
        right: 5%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    `,
  ],
})
export class NavigationComponent {
  @Input()
  burger: boolean | undefined;

  get ulClass(): string[] {
    const mode = this.burger ? 'navigation__list--burger' : 'navigation__list';

    return ['navigation__list', mode];
  }
}
