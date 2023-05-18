import {Carousel} from "@mantine/carousel";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {ProjectIcons} from "../../helpers/ProjectsIcons";

interface IProjects {
  title: string;
  descriptionES: React.ReactNode;
  descriptionEN: React.ReactNode;
  profilePhoto: typeof ProjectIcons.movilitix;
  linkGallery: string | undefined;
  linkRepository: string | undefined;
  linkPage: string | undefined;
}

const INITIAL_PROJECTS: IProjects[] = [
  {
    title: "Seafood Template",
    descriptionES:
      "Este proyecto es una plantilla sobre comida del mar. Es  una página estática. No depende de un servidor para la administración de la página.",
    descriptionEN:
      "This project is a template about seafood. It is a static page. It does not rely on a server for page administration.",
    profilePhoto: ProjectIcons.seafood,
    linkGallery: undefined,
    linkRepository: "https://github.com/marlon-rt14/food-template-the-sea",
    linkPage: "https://demo-seafood.netlify.app",
  },
  {
    title: "MOVILITIX",
    descriptionES: (
      <div>
        Esta es una aplicación móvil para la Corporación Favorita desarrollada
        por la empresa{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , mi desempeño en este proyecto fue con tecnologías móviles de frontend
        e integración de APIs.
      </div>
    ),
    descriptionEN: (
      <div>
        This is a mobile application for the Favorita Corporation developed by
        by the company bitproy{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , my performance in this project was with mobile frontend technologies
        and API integration.
      </div>
    ),
    profilePhoto: ProjectIcons.movilitix,
    linkGallery: "/movilitix",
    linkRepository: undefined,
    linkPage: undefined,
  },
  {
    title: "RAPIENTREGA",
    descriptionES: (
      <div>
        Esta es una aplicación móvil de delivery desarrollada por la empresa{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , mi desempeño en este proyecto fue con tecnologías móviles de frontend
        e integración de APIs.
      </div>
    ),
    descriptionEN: (
      <div>
        This is a mobile delivery application developed by the company{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , my performance in this project was with mobile frontend technologies
        and API integration.
      </div>
    ),
    profilePhoto: ProjectIcons.rapientrega,
    linkGallery: "/rapientrega",
    linkRepository: undefined,
    linkPage:
      "https://play.google.com/store/apps/details?id=com.nous.rapientrega&hl=en&gl=US",
  },
  {
    title: "EQUATORIAN",
    descriptionES: (
      <div>
        Esta es una plataforma web turística, su uso es para la administración
        de los datos en su versión móvil. Desarrollada para la empresa{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , mi desempeño en este proyecto fue con tecnologías web para el frontend
        e integración de APIs.
      </div>
    ),
    descriptionEN: (
      <div>
        This is a tourism web platform, its use is for the administration of the
        data in its mobile version. Developed for the company{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , my performance in this project was with web frontend technologies and
        API integration.
      </div>
    ),
    profilePhoto: ProjectIcons.equatorian,
    linkGallery: "/equatorian",
    linkRepository: undefined,
    linkPage: undefined,
  },
  {
    title: "D'PIPOS",
    descriptionES: (
      <div>
        Esta es una aplicación móvil de delivery desarrollada por la empresa{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , mi desempeño en este proyecto fue con tecnologías móviles de frontend
        e integración de APIs y supervisión del backend.
      </div>
    ),
    descriptionEN: (
      <div>
        This is a mobile delivery application developed by the company{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , my performance in this project was with mobile frontend technologies
        and API integration and backend supervision.
      </div>
    ),
    profilePhoto: ProjectIcons.dpipos,
    linkGallery: "/dpipos",
    linkRepository: undefined,
    linkPage:
      "https://play.google.com/store/apps/details?id=com.nousclic.piposapp&hl=en&gl=US",
  },
  {
    title: "ILUSTRO",
    descriptionES: (
      <div>
        Esta es una plataforma web educativa desarrollada por la empresa{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , mi desempeño en este proyecto fue con tecnologías web para el frontend
        e integración de APIs.
      </div>
    ),
    descriptionEN: (
      <div>
        This is a web educational platform developed by the company{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , my performance in this project was with web frontend technologies and
        API integration.
      </div>
    ),
    profilePhoto: ProjectIcons.ilustro,
    linkGallery: "/illustro",
    linkRepository: undefined,
    linkPage: undefined,
  },
  {
    title: "WE-U",
    descriptionES: (
      <div>
        Esta es una plataforma web dirigida hacia el monitoreo y de
        organizaciones públicas y privadas mediante sectores o áreas del pais,
        para mejorar la seguridad de los ciudadanos; desarrollada por la empresa{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , mi desempeño en este proyecto fue con tecnologías web para el frontend
        e integración de APIs.
      </div>
    ),
    descriptionEN: (
      <div>
        This is a web platform aimed at monitoring and public and private
        organizations through sectors or areas of the country, to improve the
        security of citizens; developed by the company{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , my performance in this project was with web frontend technologies and
        API integration.
      </div>
    ),
    profilePhoto: ProjectIcons.weu,
    linkGallery: "/weu",
    linkRepository: undefined,
    linkPage: undefined,
  },
  {
    title: "FAUNA INAIG",
    descriptionES: (
      <div>
        Esta es una plataforma web para el registro de todas las especies de
        animales y plantas, su uso es para la administración de la fauna en
        general con información relevante de cada especie. Desarrollada para la
        empresa{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , mi desempeño en este proyecto fue con tecnologías web para el frontend
        e integración de APIs y Amplify.
      </div>
    ),
    descriptionEN: (
      <div>
        This is a web platform for the registration of all species of animals
        and plants, its use is for the management of wildlife in general with
        relevant information for each species. Developed for the company{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , My performance in this project was with web technologies for the
        frontend and integration of APIs and Amplify.{" "}
      </div>
    ),
    profilePhoto: ProjectIcons.fauna,
    linkGallery: "/fauna",
    linkRepository: undefined,
    linkPage: undefined,
  },
];
export const SectionPropjects = () => {
  const navigate = useNavigate();

  const {i18n, t} = useTranslation();
  const currentLanguage = i18n.language;

  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  return (
    <section className="section-projects" id="section-projects">
      <div className="waves waves-up"></div>
      <div className="waves waves-down"></div>
      <div className="waves waves-middle"></div>
      <article className="aritcle-projects">
        <div className="article-title projects-title">
          <h1>{t("my projects")}</h1>
        </div>
        <div className="article-cont projects-cont">
          <div className="article-des projects-des ">
            <p>
              {currentLanguage === "es" && "Puedes visitar"}
              {currentLanguage === "en" && "Can you visit"}
              <a
                href="https://github.com/marlon-rt14"
                className="profile-github"
              >
                {currentLanguage === "es" && " mi perfil de GitHub "}
                {currentLanguage === "en" && " my GitHub profile "}
              </a>
              {currentLanguage === "es" &&
                "para conocer todos mis repositorios..."}
              {currentLanguage === "en" && " to see all of my repositories..."}
            </p>
            <Carousel
              className="w-100 mt-3"
              withIndicators
              slideSize="33.333333%"
              slideGap="md"
              loop
              align="start"
              breakpoints={[
                {maxWidth: "md", slideSize: "50%"},
                {maxWidth: "sm", slideSize: "100%", slideGap: 0},
              ]}
              styles={{
                indicator: {
                  transform: "translateY(30px)",
                  //width: "12rem",
                  //height: "4rem",
                  //transition: "width 250ms ease",

                  //"&[data-active]": {
                  //  width: "rem(40)",
                  //},
                },
              }}
            >
              {projects.map((project, index) => {
                return (
                  <Carousel.Slide key={index}>
                    <div className="">
                      <div className="carousel-card">
                        <div className="carousel-card-header">
                          <h1>{project.title}</h1>
                        </div>
                        <div className="carousel-card-body">
                          <p>
                            {currentLanguage === "es"
                              ? project.descriptionES
                              : project.descriptionEN}
                          </p>
                        </div>
                        <div className="carousel-card-footer">
                          <div className="card-footer-cont">
                            {project.linkGallery && (
                              <i
                                className="bi bi-images"
                                role="img"
                                aria-label="Gallery"
                                onClick={() => {
                                  navigate(`${project.linkGallery}`);
                                }}
                              ></i>
                            )}
                            {project.linkRepository && (
                              <i
                                className="bi-github"
                                role="img"
                                aria-label="GitHub"
                                onClick={() => {
                                  window.open(`${project.linkRepository}`);
                                }}
                              ></i>
                            )}
                            {project.linkPage && (
                              <i
                                className="bi bi-link"
                                role="img"
                                aria-label="Website"
                                onClick={() => {
                                  window.open(`${project.linkPage}`);
                                }}
                              ></i>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Slide>
                );
              })}
            </Carousel>
          </div>
        </div>
      </article>
    </section>
  );
};
