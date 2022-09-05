import { Component, Input } from '@angular/core';
import { buttonServices } from 'src/app/data/buttons';
import { textPlatform } from 'src/app/data/texts';
import { titlePlatform } from 'src/app/data/titles';

@Component({
  selector: 'app-platform-section',
  templateUrl: './platform-section.component.html',
  styleUrls: ['./platform-section.component.scss'],
})
export class PlatformSectionComponent {
  titlePlatform = titlePlatform.title;
  textPlatform = textPlatform.text;
  buttonServicesTitle = buttonServices.title;
  buttonServicesImage = buttonServices.image;

  @Input()
  screen!: string;
}
