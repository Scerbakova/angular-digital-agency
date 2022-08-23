import { Component, HostListener } from '@angular/core';
import { screen } from 'src/app/data/screen'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  screen = screen;
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
    return this.innerWidth
  }
}
