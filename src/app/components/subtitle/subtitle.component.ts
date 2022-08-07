import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  template: `<h3 [ngClass]="subtitleClasses">{{ subtitleLabel }}</h3>`,
  styles: [
    `
      .subtitle {
        font-family: 'Graphik', sans-serif;
        font-style: normal;
        font-weight: 700;
        color: #ffffff;
      }
      .subtitle--large {
        font-size: 80px;
        line-height: 84px;
      }
      .subtitle--small {
        font-size: 42px;
        line-height: 63px;
      }
    `,
  ],
})
export class SubtitleComponent {

  @Input()
  subtitleLabel = 'Subtitle';

  @Input()
  size: 'large' | 'medium' | 'small' = 'large';

  public get subtitleClasses(): string[] {
    if (this.size === 'large') {
      ('title--large');
    } else {
      ('title--small');
    }
    return ['title', `title--${this.size}`];
  }

}
