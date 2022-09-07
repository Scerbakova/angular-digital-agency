import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-image',
  template: `<img [src]="serviceImage" alt="service">`,
  styles: [`
  img {
    transition: .4s;
  }
  img:hover {
    scale: 1.2
  }`]
})
export class ServiceImageComponent {

  @Input()
  serviceImage = '';
}
