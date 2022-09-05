import { Component, HostListener, Input } from '@angular/core';
import { footer } from 'src/app/data/navigation';

@Component({
  selector: 'app-footer',
  template: `<footer class="footer">
    <app-logo class="logo"></app-logo>
    <app-navigation
    *ngIf="wideScreen else smallScreen"
      [linksAndLabels]="linksAndLabels"
    ></app-navigation>
    <ng-template #smallScreen>
    <app-navigation
      [column]="true"
      [linksAndLabels]="linksAndLabels"
    ></app-navigation>
    </ng-template>
    <app-text
      textLabel="© 2020 Enver, All Rights Reserved"
      size="small"
    ></app-text>
  </footer>`,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  linksAndLabels = footer;

  @Input()
  column = false;

  wideScreen = true;

  innerWidth: number | undefined;

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth > 1110) {
      this.wideScreen = true;
      this.column = false;
    } else {
      this.wideScreen = false;
      this.column = true;
    }
  }
}
