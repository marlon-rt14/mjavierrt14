import {MyIcons} from "../../helpers/MyIcons";

export const SectionSkills = () => {
  return (
    <section className="section-skills" id="section-skills">
      <div className="waves waves-up"></div>
      <div className="waves waves-down"></div>
      <div className="waves waves-middle"></div>
      <article className="aritcle-skills">
        <div className="article-title skills-title">
          <h1>Mis Habilidades</h1>
        </div>
        <div className="article-cont skills-cont">
          <div className="article-des skills-des">
            <p>
              Mi experiencia en el maquetado con HTML, CSS, frameworks y
              librerías para el frontend , así como el manejo del DOM con
              JavaScript es bastante extensa ya que he desarrollado varios
              proyectos personales, startups y pequeñas empresas. La creación de
              aplicaciones web; páginas web y landing pages, creación de
              aplicaciones móviles con React Native (Expo), manejo de Bases de
              datos SQL en mayor parte y NoSQL en pocos proyectos, creacion de
              servicios RESTfull, integración con Google Maps, desarrollo del
              backend usando Python con Flask, y ReactJS son mi mayor fortaleza.
              <br />
              <br />
              <i>
                He desarrollado proyectos con más tecnologías de las
                mencionadas, pero no son tan frecuentes.
              </i>
            </p>
            <div className="grid-skills">
              <div className="grid-item">
                <img
                  src={MyIcons.htmlLogo}
                  alt="html-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.cssLogo}
                  alt="css-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.javascriptLogo}
                  alt="javascript-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.bootstrapLogo}
                  alt="bootstrap-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.reactLogo}
                  alt="react-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.vscodeLogo}
                  alt="vscode-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.neovimLogo}
                  alt="neovim-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.npmLogo}
                  alt="npm-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.mysqlLogo}
                  alt="mysql-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.gitLogo}
                  alt="git-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.debianLogo}
                  alt="debian-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.pythonLogo}
                  alt="python-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.flaskLogo}
                  alt="flask-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.vitejsLogo}
                  alt="vitejs-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.expoLogo}
                  alt="expo-logo"
                  className="grid-img"
                />
              </div>
              <div className="grid-item">
                <img
                  src={MyIcons.reactQueryLogo}
                  alt="react-query-logo"
                  className="grid-img"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
