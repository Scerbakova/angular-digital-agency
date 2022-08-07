import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <router-outlet></router-outlet>
  </div>`,
  styles: [
    `
      .container {
        overflow: hidden;
        position: relative;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-digital-agency';
}
