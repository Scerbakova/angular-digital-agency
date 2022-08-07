import { Component,  HostListener } from '@angular/core';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { buttonBigPlay, buttonSmallPlay } from 'src/app/labels/buttonLabels';
import { textWhyChooseEnver } from 'src/app/labels/textLabels';
import { titleWhyChoseEnver } from 'src/app/labels/titleLabels';


@Component({
  selector: 'app-why-choose-enver-section',
  templateUrl: './why-choose-enver-section.component.html',
  styleUrls: ['./why-choose-enver-section.component.scss'],
})
export class WhyChooseEnverSectionComponent {
  titleWhyChoseEnver = titleWhyChoseEnver.title;
  textWhyChooseEnver = textWhyChooseEnver.text;
  buttonBigPlayImage = buttonBigPlay.image;
  buttonSmallPlayImage = buttonSmallPlay.image;
  play = faPlayCircle;
  pause = faPauseCircle
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

