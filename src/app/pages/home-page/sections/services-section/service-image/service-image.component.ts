import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-image',
  template: `<img [src]="serviceImage" alt="service">`,
  styleUrls: []
})
export class ServiceImageComponent {

  @Input()
  serviceImage = '';
}
