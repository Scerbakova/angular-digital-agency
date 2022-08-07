import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  template: `<p [ngClass]="textClasses">{{ label }}</p>`,
  styles: [
    '.text--large { font-size: 21px; line-height: 39px; }',
    '.text--small { font-size: 16px; line-height: 24px; }',
  ],
})
export class TextComponent {
  @Input()
  label = 'Text';

  @Input()
  size: 'large' | 'small' = 'large';

  public get textClasses(): string[] {
    if (this.size === 'large') {
      ('text--large');
    } else {
      ('text--small');
    }
    return ['text', `text--${this.size}`];
  }
}
