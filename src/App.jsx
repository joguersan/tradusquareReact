import WebNavbar from './components/Navbar';
import Footer from './components/Footer';
import RenderSidebar from './components/Sidebar';
import TSCarousel from './components/Bootstrap/Carousel';
import './App.css';
import { Col, Row, Container } from 'react-bootstrap';

const App = () => (
  <div className="App">
    <WebNavbar />
    <Container fluid className="gradient-dark">
      <Row>
        <Col sm="10" md="9" lg="6" className="mt-3 mx-auto carousel-container" >
          <TSCarousel />
        </Col>
        <div className="triangle-up mt-n5"></div>
      </Row>
      <Row className="p-3 bg-white">
        <Col sm md="8" />
        <Col sm md="4">
          <RenderSidebar />
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
)

export default App;
