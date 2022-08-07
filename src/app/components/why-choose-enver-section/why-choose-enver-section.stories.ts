// import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { TextComponent } from '../text/text.component';
import { TitleComponent } from '../title/title.component';

import { WhyChooseEnverSectionComponent } from './why-choose-enver-section.component';

export default {
  title: 'DigitalAgency/Organisms/WhyChooseEnverSection',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [WhyChooseEnverSectionComponent, TextComponent, TitleComponent, ButtonComponent],
      // imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (stories) => `<div style='backgroundColor: #19191b; height: 100vh; width: 95vw'>${stories}</div>`
    ),
  ],
  component: WhyChooseEnverSectionComponent
} as Meta;

const Template: Story<WhyChooseEnverSectionComponent> = (args: WhyChooseEnverSectionComponent) => ({
  props: args,
});

export const Platform = Template.bind({});
Platform.args = {

};