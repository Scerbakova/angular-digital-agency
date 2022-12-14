import { Story, Meta, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from '../reusable/button/button.component';

import { LinkComponent } from '../reusable/navigation/link/link.component';
import { LogoComponent } from '../reusable/logo/logo.component';
import { NavigationComponent } from '../reusable/navigation/navigation.component';
import { HeaderComponent } from './header.component';
import { buttonContact } from 'src/app/data/buttons';

export default {
  title: 'DigitalAgency/Organisms/Header',
  decorators: [
    moduleMetadata({
      declarations: [LinkComponent, LogoComponent, NavigationComponent, ButtonComponent, HeaderComponent],
    }),
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 95vw'>${stories}</div>`
    ),
  ],
  component: HeaderComponent,
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Header = Template.bind({});
Header.args = {
  buttonContactTitle: buttonContact.title,
};