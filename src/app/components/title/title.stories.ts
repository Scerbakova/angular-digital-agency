import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { TitleComponent } from './title.component';

export default {
  title: 'DigitalAgency/Atoms/Title',
  decorators: [
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: TitleComponent,
} as Meta;

const Template: Story<TitleComponent> = (args: TitleComponent) => ({
  props: args,
});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Title',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Title',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Title',
};