import PropTypes from 'prop-types';

const buttons = [
  {icon: 'controller', text: 'Proyectos', href: '#'},
  {icon: 'people-fill', text: 'Grupos', href: '#'},
  {icon: 'info-circle-fill', text: 'Información', href: '#'},
  {icon: 'moon-stars-fill', text: 'Amala', href: '#'},
  {icon: 'stickies-fill', text: 'Tablón  de misiones', href: '#'},
]

const RenderButtons = () => (
  buttons.map(button => NavbarButton(button.icon, button.text, button.href))
)

const NavbarButton = (icon, text, href) => (
  <li className='nav-item' key={text}>
    <a className='nav-link' href={href}>
      <i className={`bi bi-${ icon } me-2`}></i>{text}
    </a>
  </li>
)

NavbarButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  href: PropTypes.string
}

NavbarButton.defaultProps = {
  href: '#'
}

export default RenderButtons