import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import {ButtonComponent} from './button.component'

export default {
  title: 'DigitalAgency/Atoms/Button',
  decorators: [
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  round: false,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const BigRound = Template.bind({});
BigRound.args = {
  round: true,
  size: 'large',
  label: 'play'
};

export const SmallRound = Template.bind({});
SmallRound.args = {
  round: true,
  size: 'small',
  label: 'play'
};