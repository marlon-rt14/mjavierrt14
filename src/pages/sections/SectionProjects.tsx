import {Carousel} from "@mantine/carousel";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ProjectIcons} from "../../helpers/ProjectsIcons";

interface IProjects {
  title: string;
  description: React.ReactNode;
  profilePhoto: typeof ProjectIcons.movilitix;
  linkGallery: string | undefined;
  linkRepository: string | undefined;
  linkPage: string | undefined;
}

const INITIAL_PROJECTS: IProjects[] = [
  {
    title: "Seafood Template",
    description:
      "Este proyecto es una plantilla sobre comida del mar. Es  una página estática. No depende de un servidor para la adminstración de la página.",
    profilePhoto: ProjectIcons.seafood,
    linkGallery: undefined,
    linkRepository: "https://github.com/marlon-rt14/food-template-the-sea",
    linkPage: "https://demo-seafood.netlify.app",
  },
  {
    title: "MOVILITIX",
    description: (
      <div>
        Esta es una aplicación mobil para la Corporación Favorita desarrollada
        por la empresa{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , midesempeño en este proyecto fue con tecnologías móviles de frontend e
        integración de APIs.
      </div>
    ),
    profilePhoto: ProjectIcons.movilitix,
    linkGallery: "/movilitix",
    linkRepository: undefined,
    linkPage: undefined,
  },
  {
    title: "ILUSTRO",
    description: (
      <div>
        Esta es una plataforma web educativa desarrollada por la empresa{" "}
        <a href="https://www.bitproy.com" target="_blank">
          Bitproy
        </a>
        , mi desempeño en este proyecto fue con tecnologías web para el frontend
        e integración de APIs.
      </div>
    ),
    profilePhoto: ProjectIcons.ilustro,
    linkGallery: "/illustro",
    linkRepository: undefined,
    linkPage: undefined,
  },
];
export const SectionPropjects = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  return (
    <section className="section-projects" id="section-projects">
      <div className="waves waves-up"></div>
      <div className="waves waves-down"></div>
      <div className="waves waves-middle"></div>
      <article className="aritcle-projects">
        <div className="article-title projects-title">
          <h1>Mis Proyectos</h1>
        </div>
        <div className="article-cont projects-cont">
          <div className="article-des projects-des ">
            <p>
              Puedes visitar
              <a
                href="https://github.com/marlon-rt14"
                className="profile-github"
              >
                {" "}
                mi perfil de GitHub{" "}
              </a>
              para conocer todos mis repositorios...
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
              {projects.map((project) => {
                return (
                  <Carousel.Slide>
                    <div className="">
                      <div className="carousel-card">
                        <div className="carousel-card-header">
                          <h1>{project.title}</h1>
                        </div>
                        <div className="carousel-card-body">
                          <p>{project.description}</p>
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
