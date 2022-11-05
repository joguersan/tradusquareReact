import { Row, Col } from 'react-bootstrap';
import MediaIcons from '../SocialMedia';
import './Footer.css'

const FooterLinks = [
  { text: 'Política de privacidad', href: '#' },
  { text: 'Contactar', href: '#' },
  { text: '¿Quieres participar en un proyecto?', href: '#' }
]

const Footer = () => (
  <footer className="bg-dark text-light">
    <section className="d-flex justify-content-center p-4">
      <div className="me-4 d-none d-md-block">
        <span>¡Síguenos en nuestras redes sociales!</span>
      </div>
      <RenderButtonsFooter />
    </section>
    <Row className="align-items-center px-2">
      <Col sm md="6">
        <small className="text-danger">Todos los proyectos alojados en esta página son realizados por fans para fans sin ánimo de lucro.<br />
          En esta página únicamente aparecerá contenido sin Copyright y parches para aplicar a copias de juego originales.</small>
      </Col>
    </Row>
    <section className="justify-content-between align-items-center p-3 footer-copy d-flex">
      <span>
        <RenderLinksFooter />
      </span>
      <span><a className="text-white" href="https://tradusquare.es/">tradusquare</a> 2017 - 2022</span>
    </section>
  </footer>
)

const RenderButtonsFooter = () => (
  MediaIcons.map(button =>
    <div key={button.text} className="footer-social-icon">
      <a className="me-4" href={button.href} target="_blank" rel="noreferrer" title={button.text}>
        <i className={`i bi bi-${button.icon}`}></i>
      </a>
    </div>
  )
)

const RenderLinksFooter = () => (
  FooterLinks.map(link =>
    <><a href={link.href}><small>{link.text}</small></a><span className="mx-2">/</span></>
  )
)

export default Footer