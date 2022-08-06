import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
      this.wideScreen = true
      this.burger = false
    }
    else {
      this.wideScreen = false
      this.burger = true
    }
  }

  onShowMenu() {
    this.showMenu = !this.showMenu
  }

  public get headerClass(): string[] {
    const mode = this.burger ? 'header--burger' : 'header'

    return ['header', mode]
  }
}
