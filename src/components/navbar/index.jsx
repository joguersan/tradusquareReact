import RenderButtons from './NavbarButton'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const WebNavbar = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid nameClass="mx-3">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href="#">
              <img
                className="h-vh-5"
                loading="lazy"
                src="/images/logos/LogoTS.webp"
                alt="Logo de TraduSquare"
              />
            </Navbar.Brand>
            <RenderButtons />
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default WebNavbar