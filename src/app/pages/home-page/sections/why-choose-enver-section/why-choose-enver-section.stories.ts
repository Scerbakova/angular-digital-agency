import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { buttonBigPlay, buttonSmallPlay } from 'src/app/labels/buttonLabels';
import { textWhyChooseEnver } from 'src/app/labels/textLabels';
import { titleWhyChoseEnver } from 'src/app/labels/titleLabels';
import { ButtonComponent } from '../../../../components/reusable/button/button.component';
import { TextComponent } from '../../../../components/reusable/text/text.component';
import { TitleComponent } from '../../../../components/reusable/title/title.component';

import { WhyChooseEnverSectionComponent } from './why-choose-enver-section.component';

export default {
  title: 'DigitalAgency/Organisms/WhyChooseEnverSection',
  decorators: [
    moduleMetadata({
      declarations: [WhyChooseEnverSectionComponent, TextComponent, TitleComponent, ButtonComponent],
    }),
  ],
  component: WhyChooseEnverSectionComponent
} as Meta;

const Template: Story<WhyChooseEnverSectionComponent> = (args: WhyChooseEnverSectionComponent) => ({
  props: args,
});

export const Platform = Template.bind({});
Platform.args = {
  textWhyChooseEnver: textWhyChooseEnver.text,
  buttonBigPlayImage: buttonBigPlay.image,
  buttonSmallPlayImage: buttonSmallPlay.image,
  titleWhyChoseEnver: titleWhyChoseEnver.title,
  play: faPlayCircle,
  pause: faPauseCircle,
  isPlaying: false,
};