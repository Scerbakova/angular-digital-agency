import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'DigitalAgency/Atoms/Button',
  decorators: [
    componentWrapperDecorator(
      (stories) =>
        `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { options: ['large', 'small', 'extra-small', 'default'], control: { type: 'radio' } },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  primary: true,
  round: false,
  label: 'Button',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: 'Button',
};

export const BigButton = Template.bind({});
BigButton.args = {
  round: true,
  size: 'large',
  label: 'play',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  round: true,
  size: 'small',
  label: 'play',
};

export const ExtraSmallButton = Template.bind({});
ExtraSmallButton.args = {
  round: true,
  size: 'extra-small',
  label: 'play',
};
