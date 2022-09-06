import {
  Story,
  Meta,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { ServicesComponent } from './services-card.component';
import { TextComponent } from 'src/app/components/reusable/text/text.component';
import { ServiceImageComponent } from '../service-image/service-image.component';
import { services } from 'src/app/data/services';
import { SubtitleComponent } from 'src/app/components/reusable/subtitle/subtitle.component';

export default {
  title: 'DigitalAgency/Molecules/ServiceCard',
  decorators: [
    moduleMetadata({
      declarations: [
        TextComponent,
        ServicesComponent,
        SubtitleComponent,
        ServiceImageComponent,
      ],
    }),
    componentWrapperDecorator(
      (stories) =>
        `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: ServicesComponent,
  argTypes: {
    screen: {
      options: ['wideScreen', 'mediumScreen', 'smallScreen', 'default'],
      control: { type: 'radio' },
    },
    serviceImage: {
      options: services.map((service) => service.image),
      control: { type: 'radio' },
    },
    subtitleLabel: {
      options: services.map((service) => service.title),
      control: { type: 'radio' },
    },
    textLabel: {
      options: services.map((service) => service.text),
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ServicesComponent> = (args: ServicesComponent) => ({
  props: args,
});

export const Card = Template.bind({});
Card.args = {
  serviceImage: '../assets/images/service1.svg'
};
