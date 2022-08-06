// import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';

import { LinkComponent } from '../link/link.component';
import { LogoComponent } from '../logo/logo.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from './header.component';

export default {
  title: 'DigitalAgency/Organisms/Header',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [LinkComponent, LogoComponent, NavigationComponent, ButtonComponent, HeaderComponent],
      // imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 95vw'>${stories}</div>`
    ),
  ],
  component: HeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Header = Template.bind({});
Header.args = {
  
};