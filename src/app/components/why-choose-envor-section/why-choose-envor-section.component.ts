import { Component,  HostListener } from '@angular/core';
import { faPauseCircle, faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { buttonBigPlay } from 'src/app/labels/buttonLabels';
import { textWhyChooseEnver } from 'src/app/labels/textLabels';
import { titleWhyChoseEnver } from 'src/app/labels/titleLabels';


@Component({
  selector: 'app-why-choose-envor-section',
  templateUrl: './why-choose-envor-section.component.html',
  styleUrls: ['./why-choose-envor-section.component.scss'],
})
export class WhyChooseEnvorSectionComponent {
  titleWhyChoseEnver = titleWhyChoseEnver;
  textWhyChooseEnver = textWhyChooseEnver;
  // buttonServices = buttonServices;
  buttonBigPlay = buttonBigPlay;
  play = faPlayCircle;
  pause = faPauseCircle
  solidPlay = faPlay;
  isPlaying = false;

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

  playStopVideo = () => {
    this.isPlaying = !this.isPlaying;
  }
}

