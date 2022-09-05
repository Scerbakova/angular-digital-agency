import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { LinkComponent } from './link.component';

export default {
  title: 'DigitalAgency/Organisms/Molecules/Atoms/Link',
  decorators: [
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center; list-style: none'>${stories}</div>`
    ),
  ],
  component: LinkComponent,
} as Meta;

const Template: Story<LinkComponent> = (args: LinkComponent) => ({
  props: args,
});

export const NavigationLink = Template.bind({});
NavigationLink.args = {
  label: 'Home',
};