import PropTypes from 'prop-types';

const NavbarButton = ({ icon, text, href, }) => {
  return (
    <li className='nav-item'>
      <a className='nav-link' href={href}>
        <i className={`bi bi-${ icon } me-2`}></i> {text}
      </a>
    </li>
  )
}

NavbarButton.propTypes = {
  text: PropTypes.string
}

NavbarButton.defaultProps = {
  href: '#'
}

export default NavbarButton