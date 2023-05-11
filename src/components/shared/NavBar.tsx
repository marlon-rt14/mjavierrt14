import fondo from "../../assets/img/fondo.svg";

export const NavBar = () => {
  return (
    <header className="header" id="header">
      <nav className="nav">
        <div className="container-brand">
          <a className="container-brand__a" href="/">
            <h1 id="brand-h1">Portf</h1>
            <span id="brand-span" className="">
              olio.
            </span>
          </a>
        </div>
        <ul className="nav__ul">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#header">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-about">
              Acerca de
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-skills">
              Habilidades
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-projects">
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-contact">
              Contacto
            </a>
          </li>
        </ul>

        <ul className="nav__ul-res">
          <div className="nav-res-button-cont">
            <div className="nav-res-button">
              <i className="fa fa-bars" id="icon-menu"></i>
            </div>
          </div>
          <div className="nav__ul-cont">
            <ul className="nav__ul-res-menu">
              <li className="nav-item-res">
                <a href="#header" className="item-res">
                  Inicio
                </a>
              </li>
              <li className="nav-item-res">
                <a href="#section-about" className="item-res">
                  Acerca de
                </a>
              </li>
              <li className="nav-item-res">
                <a href="#section-skills" className="item-res">
                  Habilidades
                </a>
              </li>
              <li className="nav-item-res">
                <a href="#section-projects" className="item-res">
                  Proyectos
                </a>
              </li>
              <li className="nav-item-res">
                <a href="#section-contact" className="item-res">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
      <div className="header__div-container">
        <form className="header__form">
          <p>Hola, mi nombre es</p>
          <h2>Marlon Javier Ruiz</h2>
          <p>
            y soy &nbsp; <span className="key-text"></span>
          </p>
          <div className="form-footer">
            <a href="#section-contact" className="button">
              Contáctame
            </a>
            <div className="form-img-cont">
              <img src="./public/img/home-intellisense.svg" alt="" />
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};
