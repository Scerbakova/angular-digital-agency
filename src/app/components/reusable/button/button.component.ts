import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'backgroundColor': backgroundColor }"
    [disabled]="disabled"
  >
    {{ label }}
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  backgroundColor = 'color';

  @Input()
  label!: string;

  @Input()
  round = false;

  @Input()
  primary = false;

  @Input()
  disabled = false;

  @Input()
  size: 'large' | 'small' | 'extra-small' | '' = '';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {

    const shape = this.round ? 'button--round' : 'button--rectangle';

    const mode = this.primary ? 'button--primary' : 'button--secondary';

    return ['button', `button--${this.size}`, shape, mode]
  }

}