import {
  Story,
  Meta,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { ImageCardComponent } from './image-card.component';
import { PortfolioPictures } from 'src/app/data/pictures';

export default {
  title: 'DigitalAgency/Atoms/ImageCard',
  decorators: [
    moduleMetadata({
      declarations: [ImageCardComponent],
    }),
    componentWrapperDecorator(
      (stories) =>
        `<div style='backgroundColor: #19191b; height: 100vh; width: 100vw; display: flex; justifyContent: center; alignItems: center'>${stories}</div>`
    ),
  ],
  component: ImageCardComponent,
  argTypes: {
    picture: {
      options: PortfolioPictures.map(
        (portfolioPicture) => portfolioPicture.picture
      ),
      control: { type: 'radio' },
    },
    class: {
      options: PortfolioPictures.map(
        (portfolioPicture) => portfolioPicture.class
      ),
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ImageCardComponent> = (args: ImageCardComponent) => ({
  props: args,
});

export const ImageCard = Template.bind({});
ImageCard.args = {
  picture: '../../../assets/images/carousel_image_1.png',
  class: 'carousel__item carousel__item-upper',
};
