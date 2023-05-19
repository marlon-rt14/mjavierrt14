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
                <strong> Desarrollador web</strong> con 4 años de experiencia,
                siempre he sido un apasionado de la informática desde muy joven.
                He estado trabajando con tecnologías de desarrollo web hace 4
                años y tecnologías para backend por 3 años.
                <strong> Me gustan los desafíos</strong> y superarme a mí mismo
                involucrándome en proyectos de mediana y alta complejidad sin
                miedo a <strong>aprender nuevas tecnologías</strong> y nunca
                perder la oportunidad de ganar nuevos conocimientos.
              </p>
            )}
            {currentLanguage === "en" && (
              <p>
                <strong>Backend developer</strong> and
                <strong> Web developer </strong>with 4 years of experience, I
                have always been passionate about IT since I was very young. I
                have been working with web development technologies for 4 years
                and 3 years with backend technologies.
                <strong> I like challenges</strong> and I like to overcome
                myself getting involved in projects of medium and high
                complexity without fear of
                <strong> learning new technologies </strong>and I never miss the
                opportunity to acquire new knowledge.
              </p>
            )}
            <div>
              <a
                href={currentLanguage === "es" ? spanishCV : englishCV}
                target="_blank"
                className="button-cv button"
              >
                {t("download cv")}
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
