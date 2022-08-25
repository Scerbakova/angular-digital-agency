import { Component, Input } from '@angular/core';
import {
  carouselPageImage,
  PortfolioPicture,
  PortfolioPictures,
} from 'src/app/data/pictures';
import { titlePortfolio } from 'src/app/data/titles';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent {
  @Input()
  screen!: string;
  portfolioPictures = PortfolioPictures;
  buttons = carouselPageImage;
  activePortfolioPicture!: PortfolioPicture;
  leftButtonDisabled = true;
  rightButtonDisabled = false;

  titlePortfolio = titlePortfolio.title;

  carouselMoves() {
    this.buttons.unshift(this.buttons[2]);
    this.buttons.pop();

    let pictures = this.portfolioPictures.map((item) => item.picture);
    pictures.unshift(pictures[2]);
    pictures.pop();
    this.portfolioPictures.map((item) => ({
      ...item,
      picture: (item.picture = pictures[this.portfolioPictures.indexOf(item)]),
    }));
    this.activePortfolioPicture = this.portfolioPictures[0];
    console.log(this.activePortfolioPicture)

    if (this.screen === 'smallScreen') {
      this.activePortfolioPicture.picture ===
      '../../../assets/images/carousel_image_1.png'
        ? (this.leftButtonDisabled = true)
        : this.leftButtonDisabled = false;
      this.activePortfolioPicture.picture ===
      '../../../assets/images/carousel_image_3.png'
        ? (this.rightButtonDisabled = true)
        : this.rightButtonDisabled = false;
    }
  }
}
