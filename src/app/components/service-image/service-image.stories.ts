import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { ServiceImageComponent } from './service-image.component';

export default {
  title: 'DigitalAgency/Atoms/ServiceImage',
  decorators: [
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: ServiceImageComponent,
} as Meta;

const Template: Story<ServiceImageComponent> = (args: ServiceImageComponent) => ({
  props: args,
});

export const Image = Template.bind({});
Image.args = {
  serviceImage: '../../../assets/images/service1.svg',
};
