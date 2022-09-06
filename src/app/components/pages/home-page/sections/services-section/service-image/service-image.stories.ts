import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { services } from 'src/app/data/services';
import { ServiceImageComponent } from './service-image.component';

export default {
  title: 'DigitalAgency/Atoms/ServiceImage',
  decorators: [
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: ServiceImageComponent,
  argTypes: {
    serviceImage: {
      options: services.map((service) => service.image),
      control: { type: 'radio' },
    },
  }
} as Meta;

const Template: Story<ServiceImageComponent> = (args: ServiceImageComponent) => ({
  props: args,
});

export const Image = Template.bind({});
Image.args = {
  serviceImage: '../assets/images/service1.svg'
};
