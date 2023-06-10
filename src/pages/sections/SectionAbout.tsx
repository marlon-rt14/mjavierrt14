import {useTranslation} from "react-i18next";
import spanishCV from "../../resumes/spanish/CV-Marlon-s.pdf";
import englishCV from "../../resumes/english/CV-Marlon-e.pdf";

export const SectionAbout = () => {
  const {t, i18n} = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <section className="section-about" id="section-about">
      <div className="waves waves-up"></div>
      <div className="waves waves-down"></div>
      <div className="waves waves-middle"></div>
      <article className="aritcle-about">
        <div className="article-title about-title">
          <h1>{t("about me")}</h1>
        </div>
        <div className="article-cont about-cont">
          <div className="article-cont-img about-cont-img">
            <img src="./public/img/marlon-01.jpg" alt="profile-photo" />
          </div>
          <div className="article-des about-des">
            {currentLanguage === "es" && (
              <p>
                <strong>Desarrollador backend</strong> y
                <strong> Desarrollador web</strong> con 4 años de experiencia en
                el desarrollo frontend utilizando React.js, Apollo Client y
                JavaScript. Tengo un{" "}
                <strong>dominio experto en JavaScript</strong> y he trabajado en
                numerosos proyectos utilizando tecnologías como HTML, CSS y
                bibliotecas como Bootstrap, Material UI y muchas más.
                <br />
                <br />
                En el ámbito del backend, tengo{" "}
                <strong>3 años de experiencia trabajando con Python</strong>. He
                utilizado frameworks como Flask y he utilizado herramientas como
                SQLAlchemy para interactuar con bases de datos. También tengo
                conocimientos en GraphQL, específicamente con la biblioteca
                Graphene- SQLAlchemy, para <strong>crear APIs flexibles</strong>
                . Además, uso Docker, lo que me permite desplegar aplicaciones
                de manera rápida y eficiente.
                <br />
                <br />
                Mis conocimientos y mi experiencia me permite trabajar en
                proyectos desafiantes y estoy siempre interesado en{" "}
                <strong>
                  ampliar mis conocimientos y habilidades tecnológicas
                </strong>
                .
              </p>
            )}
            {currentLanguage === "en" && (
              <p>
                <strong>Backend developer</strong> and
                <strong> Web developer </strong>with 4 years of experience in
                frontend development using React.js, Apollo Client and
                JavaScript. I'm <strong>master level in JavaScript</strong> and
                have worked on numerous projects using technologies like HTML,
                CSS and libraries like Bootstrap, Material UI and many more.
                <br />
                <br />
                On the backend side, I have{" "}
                <strong>3 years of experience working with Python</strong>. I
                have used frameworks like Flask and I have used tools like
                SQLAlchemy to interact with databases. I also have knowledge in
                GraphQL, specifically with the Graphene- SQLAlchemy library, to{" "}
                <strong>create flexible APIs</strong>. In addition, I use
                Docker, which allows me to deploy applications quickly and
                efficiently.
                <br />
                <br />
                My knowledge and experience allows me to work on challenging
                projects and I am always interested in{" "}
                <strong>expanding my knowledge and technological skills</strong>
                .
              </p>
            )}
            <a
              href={currentLanguage === "es" ? spanishCV : englishCV}
              target="_blank"
              className="button-cv button"
            >
              {t("download cv")}
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
