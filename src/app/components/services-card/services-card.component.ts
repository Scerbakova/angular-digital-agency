import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesComponent {

  @Input()
  subtitleLabel = '';

  @Input()
  textLabel = '';

  @Input()
  serviceImage = '';

}
