// import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { TextComponent } from '../text/text.component';
import { TitleComponent } from '../title/title.component';

import { PlatformSectionComponent } from './platform-section.component';

export default {
  title: 'DigitalAgency/Organisms/PlatformSection',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [PlatformSectionComponent, TextComponent, TitleComponent, ButtonComponent],
      // imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 95vw'>${stories}</div>`
    ),
  ],
  component: PlatformSectionComponent
} as Meta;

const Template: Story<PlatformSectionComponent> = (args: PlatformSectionComponent) => ({
  props: args,
});

export const Platform = Template.bind({});
Platform.args = {

};