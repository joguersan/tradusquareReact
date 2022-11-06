import Carousel from 'react-bootstrap/Carousel';

function TSCarousel() {
  return (
    <Carousel fade className="rounded-4 shadow-down overflow-hidden" >
      <Carousel.Item style={{ height: "40vh", background: "url('https://images4.alphacoders.com/641/641485.jpg')", backgroundSize: "cover", backgroundPosition: 'center center' }}>
        <Carousel.Caption>
          <h3 className="bg-dark bg-opacity-75 rounded p-2">Lanzamiento Corpse Party: Book of Shadows</h3>
          <p className="bg-dark bg-opacity-50 rounded p-1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "40vh", background: "url('https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_HackGuLastRecode.jpg')", backgroundSize: "cover", backgroundPosition: 'center center' }}>
        <Carousel.Caption>
          <h3 className="bg-dark bg-opacity-75 rounded p-2">Se cancela el .hack G.U., chavales.</h3>
          <p className="bg-dark bg-opacity-75 rounded p-1">Siento decirlo por aquí.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "40vh", background: "url('images/CorpsePartyBookOfShadows.webp')", backgroundSize: "cover", backgroundPosition: 'center center' }}>
        <Carousel.Caption>
          <h3 className="bg-dark bg-opacity-75 rounded p-2">Lanzamiento Corpse Party: Book of Shadows</h3>
          <p className="bg-dark bg-opacity-50 rounded p-1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
const Item = () => (
  <Carousel.Item style={{ height: "40vh", background: "url('images/CorpsePartyBookOfShadows.webp')", backgroundSize: "cover" }}>
    <Carousel.Caption>
      <h3 className="bg-dark bg-opacity-75 rounded p-2">Lanzamiento Corpse Party: Book of Shadows</h3>
      <p className="bg-dark bg-opacity-50 rounded p-1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
)

export default TSCarousel;