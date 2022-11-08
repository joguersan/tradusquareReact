import RenderButtons from './NavbarButton'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TSModal from '../Bootstrap/Modal';
import UserLogin from '../Login'
import TriggerOverlay from '../Bootstrap/Overlays'
import Button from 'react-bootstrap/Button'
import './Navbar.css'

const WebNavbar = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid className="mx-lg-3">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Navbar.Brand href="#">
            <img className="h-vh-5" loading="lazy"
              src="/images/logos/LogoTS.webp" alt="Logo de TraduSquare" />
          </Navbar.Brand>
          <RenderButtons />
          <TSModal title="Inicia sesión" content={<UserLogin />} />
          <TriggerOverlay
            overlayType="tooltip"
            toggle={['hover', 'focus']} //hover, focus, click o array con varias. Ej: 'click' o {['hover', 'focus']} 
            overlayElement={buttonOverlay}
            placement="bottom"
          >
          </TriggerOverlay>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

const buttonOverlay = (
  <Button variant="success">¿Tooltip o Popover?</Button>
)

export default WebNavbar