import Carousel from 'react-bootstrap/Carousel';
import { mainCarousel } from '../constants';
import './Carousel.css'

export const CarouselItem = ({ image, captionTitle, captionSubtitle }) => (
  <Carousel.Item className="main-carousel active" style={{ background: `url('${image}')` }} key={captionTitle}>
    <Carousel.Caption>
      <h2 className="bg-dark glassmorphing rounded p-2">{captionTitle}</h2>
      <p className="bg-dark glassmorphing rounded p-1">{captionSubtitle}</p>
    </Carousel.Caption>
  </Carousel.Item>
)

const TSCarousel = () => (
  <Carousel fade className="rounded-4 shadow-down tilt-down overflow-hidden">
    {mainCarousel.map(element =>
    <Carousel.Item className="main-carousel" style={{ background: `url('${element.image}')` }} key={element.captionTitle}>
      <Carousel.Caption>
        <h2 className="bg-dark bg-opacity-50 glassmorphing rounded p-3">{element.captionTitle}</h2>
        <p className="bg-dark bg-opacity-50 glassmorphing rounded p-1">{element.captionSubtitle}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )}
  </Carousel>
)

export default TSCarousel;