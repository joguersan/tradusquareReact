import WebNavbar from './components/Navbar';
import Footer from './components/Footer';
import RenderSidebar from './components/Sidebar';
import TSCarousel from './components/Bootstrap/Carousel';
import './App.css';
import { Col, Row } from 'react-bootstrap';

const App = () => (
  <div className="App bg-dark">
    <WebNavbar />
    <Row>
      <Col sm="4" className="mx-auto carousel-container" >
        <TSCarousel />
      </Col>
    </Row>
    <Row className="p-3 bg-white mt-3">
      
      <Col sm md="8" />
      <Col sm md="4">
        <RenderSidebar />
      </Col>
    </Row>
    <Footer />
  </div>
)

export default App;
