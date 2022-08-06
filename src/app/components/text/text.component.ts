import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
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
