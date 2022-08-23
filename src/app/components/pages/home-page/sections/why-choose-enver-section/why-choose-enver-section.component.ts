import { Component, Input } from '@angular/core';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { buttonBigPlay, buttonSmallPlay } from 'src/app/data/buttons';
import { textWhyChooseEnver } from 'src/app/data/texts';
import { titleWhyChoseEnver } from 'src/app/data/titles';

@Component({
  selector: 'app-why-choose-enver-section',
  templateUrl: './why-choose-enver-section.component.html',
  styleUrls: ['./why-choose-enver-section.component.scss'],
})
export class WhyChooseEnverSectionComponent {
  @Input()
  screen!: string;

  titleWhyChoseEnver = titleWhyChoseEnver.title;
  textWhyChooseEnver = textWhyChooseEnver.text;
  buttonBigPlayImage = buttonBigPlay.image;
  buttonSmallPlayImage = buttonSmallPlay.image;
  play = faPlayCircle;
  pause = faPauseCircle;
  isPlaying = false;

  playStopVideo = () => {
    this.isPlaying = !this.isPlaying;
  };
}
