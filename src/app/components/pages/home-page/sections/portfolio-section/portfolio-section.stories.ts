import {
  Story,
  Meta,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { PortfolioSectionComponent } from './portfolio-section.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { TitleComponent } from 'src/app/components/reusable/title/title.component';
import { titlePortfolio } from 'src/app/data/titles';
import { ButtonComponent } from 'src/app/components/reusable/button/button.component';
import { carouselPageImage, PortfolioPictures } from 'src/app/data/pictures';

export default {
  title: 'DigitalAgency/Organisms/Portfolio',
  decorators: [
    moduleMetadata({
      declarations: [
        PortfolioSectionComponent,
        ImageCardComponent,
        TitleComponent,
        ButtonComponent
      ],
    }),
    componentWrapperDecorator(
      (stories) =>
        `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: PortfolioSectionComponent,
  argTypes: {
    screen: {
      options: ['wideScreen', 'mediumScreen', 'smallScreen'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<PortfolioSectionComponent> = (
  args: PortfolioSectionComponent
) => ({
  props: args,
});

export const Portfolio = Template.bind({});
Portfolio.args = {
  titlePortfolio: titlePortfolio.title,
  portfolioPictures: PortfolioPictures,
  leftButtonDisabled: true,
  rightButtonDisabled: false,
  buttons: carouselPageImage,
  screen: 'wideScreen'
};
