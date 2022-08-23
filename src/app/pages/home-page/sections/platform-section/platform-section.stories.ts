import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { buttonServices } from 'src/app/labels/buttonLabels';
import { textPlatform } from 'src/app/labels/textLabels';
import { titlePlatform } from 'src/app/labels/titleLabels';

import { ButtonComponent } from '../../../../components/reusable/button/button.component';
import { TextComponent } from '../../../../components/reusable/text/text.component';
import { TitleComponent } from '../../../../components/reusable/title/title.component';
import { PlatformSectionComponent } from './platform-section.component';

export default {
  title: 'DigitalAgency/Organisms/PlatformSection',
  decorators: [
    moduleMetadata({
      declarations: [PlatformSectionComponent, TextComponent, TitleComponent, ButtonComponent],
    }),
  ],
  component: PlatformSectionComponent,
} as Meta;

const Template: Story<PlatformSectionComponent> = (args: PlatformSectionComponent) => ({
  props: args,
});

export const Platform = Template.bind({});
Platform.args = {
  titlePlatform: titlePlatform.title,
  textPlatform:  textPlatform.text,
  buttonServicesTitle:  buttonServices.title,
  buttonServicesImage:  buttonServices.image,
};