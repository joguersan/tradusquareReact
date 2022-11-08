import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import { navbarButtons } from '../constants';

// Esta función devuelve un array creado a partir del array buttons.
// Cada elemento del array llama al componente NavbarButton con propiedades. 

const RenderButtons = () => (
  navbarButtons.map(button =>
    <NavbarButton
      icon={button.icon}
      text={button.text}
      href={button.href}
      key={button.text}
    />
  )
)

// Este componente renderiza un botón de la navbar en HTML.

const NavbarButton = ({ icon, text, href }) => (
  <Nav.Link href={href} key={text} id={`nav-button-${icon}`}>
    <i className={`bi bi-${icon} me-2`}></i>{text}
  </Nav.Link>
)

// Comprobaciones de las propiedades de NavbarButton.

NavbarButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  href: PropTypes.string
}

NavbarButton.defaultProps = {
  href: '#'
}

export default RenderButtons