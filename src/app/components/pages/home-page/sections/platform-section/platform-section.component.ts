import { Component, HostListener, Input } from '@angular/core';
import { buttonServices } from 'src/app/data/buttons';
import { textPlatform } from 'src/app/data/texts';
import { titlePlatform } from 'src/app/data/titles';
// import { screen } from 'src/app/data/screen';

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


  // innerWidth: number | undefined;
  // @HostListener('window:resize')
  // onResize() {
  //   this.innerWidth = window.innerWidth;

  //   if (this.innerWidth > 875) {
  //     this.screen = 'wideScreen';
  //   } else if (this.innerWidth > 775 && this.innerWidth < 875) {
  //     this.screen = 'mediumScreen';
  //   } else {
  //     this.screen = 'smallScreen';
  //   }
  // }
}
