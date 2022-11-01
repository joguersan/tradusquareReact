import NavbarButton from './NavbarButton'

const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-primary">
        <div className="container-fluid">
          <a className="navbar-brand imagenCabecera" href="">
              <img loading="lazy" src="/images/logoMini.webp" alt="Logo de TraduSquare" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavbarButton icon='controller' text='Proyectos' href=''/>
                <NavbarButton icon='people-fill' text='Grupos' href=''/>
                <NavbarButton icon='info-circle-fill' text='Información' href=''/>
                <NavbarButton icon='moon-stars-fill' text='Amala' href=''/>
                <NavbarButton icon='stickies-fill' text='Tablón de misiones' href=''/>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar