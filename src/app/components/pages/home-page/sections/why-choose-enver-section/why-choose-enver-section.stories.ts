import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { buttonBigPlay, buttonSmallPlay } from 'src/app/data/buttons';
import { textWhyChooseEnver } from 'src/app/data/texts';
import { titleWhyChoseEnver } from 'src/app/data/titles';
import { ButtonComponent } from '../../../../reusable/button/button.component';
import { TextComponent } from '../../../../reusable/text/text.component';
import { TitleComponent } from '../../../../reusable/title/title.component';

import { WhyChooseEnverSectionComponent } from './why-choose-enver-section.component';

export default {
  title: 'DigitalAgency/Organisms',
  decorators: [
    moduleMetadata({
      declarations: [WhyChooseEnverSectionComponent, TextComponent, TitleComponent, ButtonComponent],
    }),
  ],
  component: WhyChooseEnverSectionComponent,
  argTypes: {
    screen: { options: ['wideScreen', 'mediumScreen', 'smallScreen', 'default'], control: { type: 'radio' } },
  },
} as Meta;

const Template: Story<WhyChooseEnverSectionComponent> = (args: WhyChooseEnverSectionComponent) => ({
  props: args,
});

export const WhyChooseEnver = Template.bind({});
WhyChooseEnver.args = {
  textWhyChooseEnver: textWhyChooseEnver.text,
  buttonBigPlayImage: buttonBigPlay.image,
  buttonSmallPlayImage: buttonSmallPlay.image,
  titleWhyChoseEnver: titleWhyChoseEnver.title,
  play: faPlayCircle,
  pause: faPauseCircle,
  isPlaying: false,
};