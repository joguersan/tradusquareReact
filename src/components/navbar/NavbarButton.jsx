import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

// Este array de objetos genera un botón en la navbar por cada objeto.
// Indica el icono y el texto del botón y la ruta a la que lleva
const buttons = [
  {icon: 'controller', text: 'Proyectos', href: '#'},
  {icon: 'people-fill', text: 'Grupos', href: '#'},
  {icon: 'info-circle-fill', text: 'Información', href: '#'},
  {icon: 'moon-stars-fill', text: 'Amala', href: '#'},
  {icon: 'stickies-fill', text: 'Tablón  de misiones', href: '#'},
]

// Esta función devuelve un array creado a partir del array buttons.
// Cada elemento del array llama al componente NavbarButton con propiedades. 

const RenderButtons = () => (
  buttons.map(button =>
    <NavbarButton icon={button.icon} text={button.text} href={button.href} key={button.text}/>
  )
)

// Este componente renderiza un botón de la navbar en HTML.

const NavbarButton = ({ icon, text, href }) => (
  <Nav.Link href={href} key={text}>
    <i className={`bi bi-${ icon } me-2`}></i>{text}
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