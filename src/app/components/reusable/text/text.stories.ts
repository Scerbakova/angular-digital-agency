import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { TextComponent } from './text.component';

export default {
  title: 'DigitalAgency/Atoms/Text',
  decorators: [
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: TextComponent,
} as Meta;

const Template: Story<TextComponent> = (args: TextComponent) => ({
  props: args,
});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  textLabel: 'Text',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  textLabel: 'Text',
}

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  textLabel: 'Text',
};