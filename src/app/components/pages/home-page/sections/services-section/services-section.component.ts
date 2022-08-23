import { Component, Input } from '@angular/core';
import { titleServices } from 'src/app/data/titles';
import { services } from 'src/app/data/services';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent {
  @Input()
  screen!: string;

  titleServices = titleServices.title;
  services = services;
}
