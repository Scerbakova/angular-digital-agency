import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { LogoComponent } from './logo.component';

export default {
  title: 'DigitalAgency/Atoms/Logo',
  decorators: [
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center;>${stories}</div>`
    ),
  ],
  component: LogoComponent,
} as Meta;

const Template: Story<LogoComponent> = (args: LogoComponent) => ({
  props: args,
});

export const Logo = Template.bind({});
Logo.args = {
  label: 'Envor',
  image: '../../../assets/images/Logo Icon 1.svg',
};
