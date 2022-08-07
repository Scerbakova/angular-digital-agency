import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<p [ngClass]="titleClasses">{{ label }}</p>`,
  styles: [
    `
      .title {
        font-family: 'Graphik', sans-serif;
        font-style: normal;
        font-weight: 700;
        color: #ffffff;
      }
      .title--large {
        font-size: 80px;
        line-height: 84px;
      }
      .title--medium {
        font-size: 60px;
        line-height: 70px;
      }
      .title--small {
        font-size: 42px;
        line-height: 63px;
      }
    `,
  ],
})
export class TitleComponent {
  @Input()
  label = 'Title';

  @Input()
  size: 'large' | 'medium' | 'small' = 'large';

  public get titleClasses(): string[] {
    if (this.size === 'large') {
      ('title--large');
    } else if (this.size === 'medium') {
      ('title--medium');
    } else {
      ('title--small');
    }
    return ['title', `title--${this.size}`];
  }
}
