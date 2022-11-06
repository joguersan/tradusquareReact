import Carousel from 'react-bootstrap/Carousel';

function TSCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item className="rounded-4" style={{ height: "40vh", background: "url('images/CorpsePartyBookOfShadows.webp')", backgroundSize: "cover" }}>
        <Carousel.Caption>
          <h3 className="bg-dark bg-opacity-75 rounded p-2">Lanzamiento Corpse Party: Book of Shadows</h3>
          <p className="bg-dark bg-opacity-50 rounded p-1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="rounded-4" style={{ height: "40vh", background: "url('images/CorpsePartyBookOfShadows.webp')", backgroundSize: "cover" }}>
        <Carousel.Caption>
          <h3 className="bg-dark bg-opacity-50 rounded p-2">Lanzamiento Corpse Party: Book of Shadows</h3>
          <p className="bg-dark bg-opacity-50 rounded p-1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="rounded-4" style={{ height: "40vh", background: "url('images/CorpsePartyBookOfShadows.webp')", backgroundSize: "cover" }}>
        <Carousel.Caption>
          <h3 className="bg-dark bg-opacity-50 rounded p-2">Lanzamiento Corpse Party: Book of Shadows</h3>
          <p className="bg-dark bg-opacity-50 rounded p-1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
const Item = () => (
  <Carousel.Item className="rounded-4" style={{ height: "40vh", background: "url('images/CorpsePartyBookOfShadows.webp')", backgroundSize: "cover" }}>
    <Carousel.Caption>
      <h3 className="bg-dark bg-opacity-50 rounded p-2">Lanzamiento Corpse Party: Book of Shadows</h3>
      <p className="bg-dark bg-opacity-50 rounded p-1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
)
export default TSCarousel;