import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h2 [ngClass]="titleClasses">{{ label }}</h2>`,
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
        line-height: 79px;
      }
      .title--extra-small {
        font-size: 36px;
        line-height: 54px;
      }
    `,
  ],
})
export class TitleComponent {
  @Input()
  label = 'Title';

  @Input()
  size: 'large' | 'medium' | 'small' | 'extra-small' = 'large';

  public get titleClasses(): string[] {
    if (this.size === 'large') {
      ('title--large');
    } else if (this.size === 'medium') {
      ('title--medium');
    } else if (this.size === 'small') {
      ('title--small');
    } else {
      ('title--extra-small');
    }
    return ['title', `title--${this.size}`];
  }
}
