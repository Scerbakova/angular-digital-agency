import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SubtitleComponent } from 'src/app/components/reusable/subtitle/subtitle.component';

import { services } from 'src/app/data/services';
import { titleServices } from 'src/app/data/titles';

import { TextComponent } from '../../../../reusable/text/text.component';
import { TitleComponent } from '../../../../reusable/title/title.component';
import { ServiceImageComponent } from './service-image/service-image.component';
import { ServicesComponent } from './services-card/services-card.component';
import { ServicesSectionComponent } from './services-section.component';

export default {
  title: 'DigitalAgency/Organisms/Services',
  decorators: [
    moduleMetadata({
      declarations: [ServicesSectionComponent, TextComponent, TitleComponent, ServicesComponent, SubtitleComponent, ServiceImageComponent],
    }),
  ],
  component: ServicesSectionComponent,
  argTypes: {
    screen: { options: ['wideScreen', 'mediumScreen', 'smallScreen', 'default'], control: { type: 'radio' } },
  },
} as Meta;

const Template: Story<ServicesSectionComponent> = (args: ServicesSectionComponent) => ({
  props: args,
});

export const Services = Template.bind({});
Services.args = {
  titleServices: titleServices.title,
  services: services
};