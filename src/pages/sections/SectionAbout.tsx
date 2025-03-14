import { useTranslation } from "react-i18next";
import spanishCV from "../../resumes/spanish/CV-Marlon-s.pdf";
import englishCV from "../../resumes/english/CV-Marlon-e.pdf";

export const SectionAbout = () => {
  const { t, i18n } = useTranslation();

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
            <img src="/img/marlon-01.jpg" alt="profile-photo" />
          </div>
          <div className="article-des about-des">
            {currentLanguage === "es" && (
              <>
                <p>
                  Con casi 6 años de experiencia en el desarrollo de software, he consolidado una trayectoria sólida y versátil en
                  el mundo de la tecnología. Mi expertise abarca tanto el frontend como el backend, con un dominio avanzado de{" "}
                  <strong>React & React Native (expo) </strong>
                  para la creación de interfaces dinámicas y escalables. En el backend, he trabajado extensamente con{" "}
                  <strong>Python</strong>
                  (utilizando frameworks como <strong>Django y Flask</strong>) y Node.js (con <strong>Express</strong>), diseñando
                  arquitecturas robustas y eficientes.
                </p>
                <p>
                  Además, cuento con experiencia como <strong>científico de datos</strong>, lo que me ha permitido integrar
                  análisis avanzados y soluciones basadas en datos en los proyectos en los que he participado. He implementado
                  patrones de diseño como
                  <strong> MVC y Hexagonal</strong>, y he utilizado herramientas y librerías modernas como{" "}
                  <strong>React Query, Zustand, WebSockets, Redis, REST API, y GraphQL, AWS</strong>, lo que me ha permitido
                  desarrollar aplicaciones altamente optimizadas y mantenibles.
                </p>
                <p>
                  Estoy constantemente actualizando mis habilidades y explorando nuevas tecnologías para seguir aportando valor en
                  cada proyecto en el que participo.
                </p>
              </>
            )}
            {currentLanguage === "en" && (
              <>
                <p>
                  With almost 6 years of experience in software development, I have consolidated a solid and versatile background
                  in the world of technology. My expertise spans both frontend and backend, with an advanced mastery of{" "}
                  <strong>React & React Native (expo)</strong> for creating dynamic and scalable interfaces. On the backend, I
                  have worked extensively with <strong>Python</strong> (using frameworks such as <strong>Django and Flask</strong>
                  ) and Node.js (with <strong>Express</strong>), designing robust and efficient architectures.
                </p>
                <p>
                  In addition, I have experience as a <strong>data scientist</strong>, which has allowed me to integrate advanced
                  analytics and data-driven solutions in the projects in which I have participated. I have implemented design
                  patterns such as MVC and Hexagonal, and I have used modern tools and libraries such as{" "}
                  <strong>React Query, Zustand, WebSockets, Redis, REST API, and GraphQL, AWS</strong>, which has allowed me to
                  develop highly optimized and maintainable applications.
                </p>
                <p>
                  I am constantly updating my skills and exploring new technologies to continue to add value to every project I am
                  involved in.
                </p>
              </>
            )}
            <a href={currentLanguage === "es" ? spanishCV : englishCV} target="_blank" className="button-cv button" style={{ margin: 'auto' }}>
              {t("download cv")}
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
