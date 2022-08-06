import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
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
