import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SubtitleComponent } from './subtitle.component';

export default {
  title: 'DigitalAgency/Atoms/Subtitle',
  decorators: [
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: SubtitleComponent,
} as Meta;

const Template: Story<SubtitleComponent> = (args: SubtitleComponent) => ({
  props: args,
});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  subtitleLabel: 'Subtitle',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  subtitleLabel: 'Subtitle',
};