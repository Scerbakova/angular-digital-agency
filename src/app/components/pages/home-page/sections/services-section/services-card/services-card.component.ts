import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-card',
  template: `
    <div class="card__wrapper">
      <div class="card__content" [routerLink]="'/services'">
        <app-service-image [serviceImage]="serviceImage"></app-service-image>
        <app-subtitle [subtitleLabel]="subtitleLabel"></app-subtitle>
        <div [ngSwitch]="screen">
          <app-text
            *ngSwitchCase="'mediumScreen'"
            [textLabel]="textLabel"
            size="medium"
          ></app-text>
          <app-text
            *ngSwitchCase="'smallScreen'"
            [textLabel]="textLabel"
            size="small"
          ></app-text>
          <app-text
            *ngSwitchDefault
            size="medium"
            [textLabel]="textLabel"
          ></app-text>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./services-card.component.scss'],
})
export class ServicesComponent {
  @Input()
  subtitleLabel!: string;

  @Input()
  textLabel!: string;

  @Input()
  serviceImage!: string;

  @Input()
  screen!: string;
}
