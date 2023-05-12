export const SectionAbout = () => {
  return (
    <section className="section-about" id="section-about">
      <div className="waves waves-up"></div>
      <div className="waves waves-down"></div>
      <div className="waves waves-middle"></div>
      <article className="aritcle-about">
        <div className="article-title about-title">
          <h1>Acerca de mí</h1>
        </div>
        <div className="article-cont about-cont">
          <div className="article-cont-img about-cont-img">
            <img src="./public/img/marlon-01.jpg" alt="profile-photo" />
          </div>
          <div className="article-des about-des">
            <p>
              <strong>Desarrollador backend</strong> y
              <strong>Desarrollador web</strong> con 4 años de experiencia,
              siempre he sido un apasionado de la informática desde muy joven.
              He estado trabajando con tecnologías de desarrollo web hace 4 años
              y tecnologías para backend por 3 años.
              <strong> Me gustan los desafíos</strong> y superarme a mí mismo
              involucrándome en proyectos de mediana y alta complejidad sin
              miedo a <strong>aprender nuevas tecnologías</strong> y nunca
              perder la oportunidad de ganar nuevos conocimientos.
            </p>
            <div>
              <a
                href="./dist/CVI-Marlon-s.pdf"
                target="_blank"
                className="button-cv button"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
