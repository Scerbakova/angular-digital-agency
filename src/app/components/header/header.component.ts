import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header
      *ngIf="wideScreen; else smallScreen"
      [ngClass]="headerClass"
    >
      <app-logo></app-logo>
      <app-navigation></app-navigation>
      <app-button *ngIf="wideScreen" label="Contact us"></app-button>
    </header>
    <ng-template #smallScreen>
      <header [ngClass]="headerClass">
        <app-logo></app-logo>
        <app-navigation
          [burger]="true"
          *ngIf="showMenu === true"
        ></app-navigation>
        <div (click)="onShowMenu()">
          <img
            *ngIf="!showMenu; else showClose"
            src="../../../assets/images/burger.svg"
            alt="menu"
          />
          <ng-template #showClose>&#10006;</ng-template>
        </div>
      </header>
    </ng-template>`,
  styles: [
    `
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `,
  ],
})
export class HeaderComponent {
  @Input()
  burger = false;

  wideScreen = true;

  showMenu = false;

  innerWidth: number | undefined;

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth > 775) {
      this.wideScreen = true;
      this.burger = false;
    } else {
      this.wideScreen = false;
      this.burger = true;
    }
  }

  onShowMenu() {
    this.showMenu = !this.showMenu;
  }

  public get headerClass(): string[] {
    const mode = this.burger ? 'header--burger' : 'header';

    return ['header', mode];
  }
}
