import { Component, Input } from '@angular/core';
import { buttonContact } from 'src/app/data/buttons';
import { titleContact } from 'src/app/data/titles';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  buttonContactTitle = buttonContact.title
  titleContact = titleContact.title;

  @Input()
  screen!: string;
}
