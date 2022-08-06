import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input()
  burger: boolean | undefined
  
  get ulClass(): string[] {
    const mode = this.burger ? 'navigation__list--burger' : 'navigation__list'

    return ['navigation__list', mode]
  }
}
