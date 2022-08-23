import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  template: `<h3 [ngClass]="subtitleClasses">{{ subtitleLabel }}</h3>`,
  styles: [
    `
      .subtitle {
        font-family: 'Nunito Sans', sans-serif;
        font-style: normal;
        font-weight: 600;
        color: #ffffff;
      }
      .subtitle--large {
        font-size: 28px;
        line-height: 38px;
      }
      .subtitle--small {
        font-size: 24px;
        line-height: 33px;
      }
    `,
  ],
})
export class SubtitleComponent {
  @Input()
  subtitleLabel = 'Subtitle';

  @Input()
  size: 'large' | 'small' = 'large';

  public get subtitleClasses(): string[] {
    if (this.size === 'large') {
      ('subtitle--large');
    } else {
      ('subtitle--small');
    }
    return ['subtitle', `subtitle--${this.size}`];
  }
}
