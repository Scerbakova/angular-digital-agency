export interface PortfolioPicture {
  picture: string;
  class: string;
}

export const PortfolioPictures: PortfolioPicture[] = [
  {
    picture: '../../../assets/images/carousel_image_1.png',
    class: 'carousel__item carousel__item-upper',
  },
  {
    picture: '../../../assets/images/carousel_image_2.png',
    class: 'carousel__item carousel__item-middle',
  },
  {
    picture: '../../../assets/images/carousel_image_3.png',
    class: 'carousel__item carousel__item-lower',
  },
];

export const carouselPageImage = [
  '../../../assets/images/carousel-page-image-1.png',
  '../../../assets/images/carousel-page-image-2.png',
  '../../../assets/images/carousel-page-image-3.png',
];
