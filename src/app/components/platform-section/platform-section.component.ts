import { Component, HostListener } from '@angular/core';
import { buttonServices } from 'src/app/labels/buttonLabels';
import { textPlatform } from 'src/app/labels/textLabels';
import { titlePlatform } from 'src/app/labels/titleLabels';

@Component({
  selector: 'app-platform-section',
  templateUrl: './platform-section.component.html',
  styleUrls: ['./platform-section.component.scss'],
})
export class PlatformSectionComponent {
  titlePlatformTitle = titlePlatform.title;
  textPlatformText = textPlatform.text;
  buttonServicesTitle = buttonServices.title;
  buttonServicesImage = buttonServices.image;
  buttonColor = '#5454D4';

  screen: 'wideScreen' | 'mediumScreen' | 'smallScreen' = 'wideScreen';

  innerWidth: number | undefined;

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth > 875) {
      this.screen = 'wideScreen';
    } else if (this.innerWidth > 775 && this.innerWidth < 875) {
      this.screen = 'mediumScreen';
    } else {
      this.screen = 'smallScreen';
    }
  }
}
