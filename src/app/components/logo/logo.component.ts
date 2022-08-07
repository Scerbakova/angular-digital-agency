import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `<div class="logo__container">
    <img class="logo__svg" [src]="image" alt="logo" />
    <p class="logo__text">{{ label }}</p>
  </div>`,
  styles: [
    `
      .logo__container {
        display: flex;
        flex-direction: row;
      }

      .logo__text {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 140%;
        color: #ffffff;
        position: absolute;
        margin-left: 48px;
      }
    `,
  ],
})
export class LogoComponent {
  @Input()
  label = 'Enver';

  @Input()
  image = '../../../assets/images/Logo Icon 1.svg';
}
