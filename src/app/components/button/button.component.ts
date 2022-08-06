import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  primary = false;

  @Input()
  label = 'Button';

  // @Input()
  // type = 'round';

  public get classes(): string[] {

    const mode = this.primary ? 'button--primary' : 'button--secondary';

    return ['button', 'button--', mode];
  }

}