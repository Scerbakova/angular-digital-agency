import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';

import { LinkComponent } from './link/link.component';
import { NavigationComponent } from './navigation.component';

export default {
  title: 'DigitalAgency/Molecules/Navigation',
  decorators: [
    moduleMetadata({
      declarations: [LinkComponent, NavigationComponent],
    }),
    componentWrapperDecorator(
      (stories) =>
        `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: NavigationComponent,
} as Meta;

const Template: Story<NavigationComponent> = (args: NavigationComponent) => ({
  props: args,
});

export const Navigation = Template.bind({});
Navigation.args = {
  burger: false,
  column: false,
  linksAndLabels: [
    { link: '/home', label: 'Home' },
    { link: '/services', label: 'Services' },
    { link: '/project', label: 'Our Project' },
    { link: '/about', label: 'About us' },
  ],
};
