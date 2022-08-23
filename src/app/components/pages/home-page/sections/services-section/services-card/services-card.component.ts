import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-card',
  template: `
    <div class="card__wrapper">
      <div class="card__content">
        <app-service-image [serviceImage]="serviceImage"></app-service-image>
        <app-subtitle [subtitleLabel]="subtitleLabel"></app-subtitle>
        <app-text [textLabel]="textLabel" size="medium"></app-text>
      </div>
    </div>
  `,
  styleUrls: ['./services-card.component.scss'],
})
export class ServicesComponent {
  @Input()
  subtitleLabel = '';

  @Input()
  textLabel = '';

  @Input()
  serviceImage = '';

}
