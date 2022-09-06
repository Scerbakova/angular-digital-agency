import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { buttonServices } from 'src/app/data/buttons';
import { textPlatform } from 'src/app/data/texts';
import { titlePlatform } from 'src/app/data/titles';

import { ButtonComponent } from '../../../../reusable/button/button.component';
import { TextComponent } from '../../../../reusable/text/text.component';
import { TitleComponent } from '../../../../reusable/title/title.component';
import { PlatformSectionComponent } from './platform-section.component';

export default {
  title: 'DigitalAgency/Organisms/Platform',
  decorators: [
    moduleMetadata({
      declarations: [PlatformSectionComponent, TextComponent, TitleComponent, ButtonComponent],
    }),
  ],
  component: PlatformSectionComponent,
  argTypes: {
    screen: { options: ['wideScreen', 'mediumScreen', 'smallScreen', 'default'], control: { type: 'radio' } },
  },
} as Meta;

const Template: Story<PlatformSectionComponent> = (args: PlatformSectionComponent) => ({
  props: args,
});

export const Platform = Template.bind({});
Platform.args = {
  titlePlatform: titlePlatform.title,
  textPlatform:  textPlatform.text,
  buttonServicesTitle:  buttonServices.title,
  buttonServicesImage: buttonServices.image,
  round: false,
  primary: true
};