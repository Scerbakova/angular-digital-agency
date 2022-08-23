import { Component, Input } from '@angular/core';
import { titlePortfolio } from 'src/app/data/titles';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent {
  @Input()
  screen!: string;
  offset = 0 + 'px';

  titlePortfolio = titlePortfolio.title;

  carouselMoves() {
    let newOffset
    newOffset = this.offset.replace('px', '')
    newOffset = +newOffset - 400
    this.offset = newOffset + 'px'
  }
}
