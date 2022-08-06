import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input()
  label = 'Envor';

  @Input()
  image = '../../../assets/images/Logo Icon 1.svg';
}
