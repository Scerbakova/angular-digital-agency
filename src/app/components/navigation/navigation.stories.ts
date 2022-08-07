// import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';

import { LinkComponent } from '../link/link.component';
import { NavigationComponent } from './navigation.component';

export default {
  title: 'DigitalAgency/Molecules/Navigation',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [LinkComponent, NavigationComponent],
      // imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
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
};