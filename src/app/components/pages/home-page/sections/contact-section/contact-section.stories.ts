import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { buttonServices } from 'src/app/data/buttons';
import { titleContact } from 'src/app/data/titles';

import { ButtonComponent } from '../../../../reusable/button/button.component';
import { TextComponent } from '../../../../reusable/text/text.component';
import { TitleComponent } from '../../../../reusable/title/title.component';
import { ContactSectionComponent } from './contact-section.component';

export default {
  title: 'DigitalAgency/Organisms/Contact',
  decorators: [
    moduleMetadata({
      declarations: [ContactSectionComponent, TextComponent, TitleComponent, ButtonComponent],
    }),
  ],
  component: ContactSectionComponent,
  argTypes: {
    screen: { options: ['wideScreen', 'mediumScreen', 'smallScreen'], control: { type: 'radio' } },
  },
} as Meta;

const Template: Story<ContactSectionComponent> = (args: ContactSectionComponent) => ({
  props: args,
});

export const Contact = Template.bind({});
Contact.args = {
  titleContact: titleContact.title,
  buttonContactTitle:  buttonServices.title,
  round: false,
  primary: true
};