import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `
  <li>
    <a
      [routerLink]="link"
      routerLinkActive="navbar__link-active"
      class="navbar__link"
      >{{ label }}</a
    >
  </li>
  `,
  styles: [
    `
      .navbar__link {
        font-size: 18px;
        line-height: 25px;
        color: rgba(255, 255, 255, 0.7);
      }

      .navbar__link-active {
        color: #5454d4;
      }
    `,
  ],
})
export class LinkComponent {

  @Input()
  link!: string
  
  @Input()
    label!: string
}
