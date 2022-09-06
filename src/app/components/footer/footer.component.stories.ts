import { Story, Meta, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';

import { LinkComponent } from '../reusable/navigation/link/link.component';
import { LogoComponent } from '../reusable/logo/logo.component';
import { NavigationComponent } from '../reusable/navigation/navigation.component';
import { FooterComponent } from './footer.component';
import { TextComponent } from '../reusable/text/text.component';

export default {
  title: 'DigitalAgency/Organisms/Footer',
  decorators: [
    moduleMetadata({
      declarations: [LinkComponent, LogoComponent, NavigationComponent, TextComponent, FooterComponent],
    }),
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 95vw'>${stories}</div>`
    ),
  ],
  component: FooterComponent,
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const Footer = Template.bind({});
Footer.args = {
};