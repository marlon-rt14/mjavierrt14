import {Carousel} from "@mantine/carousel";

export const SectionPropjects = () => {
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
                mi perfil de GitHub
              </a>
              para conocer todos mis repositorios...
            </p>
            <Carousel
              className="border w-100 mt-3 border-danger"
              withIndicators
              height={300}
              slideSize="33.333333%"
              //min-width={100}
              slideGap="md"
              loop
              align="start"
              breakpoints={[
                {maxWidth: "md", slideSize: "50%"},
                {maxWidth: "sm", slideSize: "100%", slideGap: 0},
              ]}
            >
              {[
                {
                  title: "MOVILITIX",
                  description:
                    "Esta es una aplicación mobil para la Corporación Favorita desarrollada por la empresa Bitproy, midesempeño en este proyecto fue con tecnologías mobil de frontend e integración de APIs.",
                  profilePhoto: "",
                },
              ].map((project) => {
                return (
                  <Carousel.Slide>
                    <div className="border border-warning">
                      <div className="carousel-card">
                        <div className="carousel-card-header">
                          <h1>׳׳</h1>
                        </div>
                        <div className="carousel-card-body">
                          <p>{project.description}</p>
                        </div>
                        <div className="carousel-card-footer">
                          <div className="card-footer-cont">
                            <div className="card-img-cont">
                              <img
                                src="./public/img/projects/movilitix/index.svg"
                                alt="index-movilitix"
                              />
                            </div>
                            <div>
                              <a href="./routes/movilitix/movilitix.html">
                                <h4>{project.title}</h4>
                              </a>
                            </div>
                            <div>
                              <i
                                className="bi-github"
                                role="img"
                                aria-label="GitHub"
                              ></i>
                            </div>
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

const MyCarousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-card">
            <div className="carousel-card-header">
              <h1>٬٬</h1>
            </div>
            <div className="carousel-card-body">
              <p>
                Este proyecto es una plantilla sobre comida del mar. Es una
                página estática. No depende de un servidor para la adminstración
                de la página.
              </p>
            </div>
            <div className="carousel-card-footer">
              <div className="card-footer-cont">
                <div className="card-img-cont">
                  <img src="./public/img/projects/seafood1.jpg" alt="ejemplo" />
                </div>
                <div>
                  <a
                    href="https://demo-seafood.netlify.app/"
                    target="_blank"
                    rel="noopener"
                  >
                    <h4>Seafood Template</h4>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/marlon-rt14/food-template-the-sea"
                    target="_blank"
                    rel="noopener"
                  >
                    <i className="bi-github" role="img" aria-label="GitHub"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-card">
            <div className="carousel-card-header">
              <h1>٬٬</h1>
            </div>
            <div className="carousel-card-body">
              <p>
                Esta es una aplicación mobil para la Corporación Favorita
                desarrollada por la empresa Bitproy, mi desempeño en este
                proyecto fue con tecnologías mobil de frontend e integración de
                APIs.
              </p>
            </div>
            <div className="carousel-card-footer">
              <div className="card-footer-cont">
                <div className="card-img-cont">
                  <img
                    src="./public/img/projects/movilitix/index.svg"
                    alt="index-movilitix"
                  />
                </div>
                <div>
                  <a href="./routes/movilitix/movilitix.html">
                    <h4>MOVILITIX</h4>
                  </a>
                </div>
                <div>
                  <i className="bi-github" role="img" aria-label="GitHub"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-card">
            <div className="carousel-card-header">
              <h1>٬٬</h1>
            </div>
            <div className="carousel-card-body">
              <p>
                Esta es una plataforma web educativa desarrollada por la empresa
                Bitproy, mi desempeño en este proyecto fue con tecnologías web
                para el frontend e integración de APIs.
              </p>
            </div>
            <div className="carousel-card-footer">
              <div className="card-footer-cont">
                <div className="card-img-cont">
                  <img
                    src="./public/img/projects/illustro/index.svg"
                    alt="index-ilustro"
                  />
                </div>
                <div>
                  <a href="./routes/ilustro/ilustro.html">
                    <h4>ILUSTRO</h4>
                  </a>
                </div>
                <div>
                  <i className="bi-github" role="img" aria-label="GitHub"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-card">
            <div className="carousel-card-header">
              <h1>٬٬</h1>
            </div>
            <div className="carousel-card-body">
              <p>
                Esta es una aplicación mobil de delivery desarrollada por la
                empresa Bitproy, mi desempeño en este proyecto fue el desarrollo
                del frontend con tecnologías móviles, integración de APIs y
                supervisión del backend.
              </p>
            </div>
            <div className="carousel-card-footer">
              <div className="card-footer-cont">
                <div className="card-img-cont">
                  <img
                    src="./public/img/projects/dpipos/index.svg"
                    alt="index-dpipos"
                  />
                </div>
                <div>
                  <a href="./routes/dpipos/dpipos.html">
                    <h4>D'PIPOS</h4>
                  </a>
                </div>
                <div>
                  <i className="bi-github" role="img" aria-label="GitHub"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-card">
            <div className="carousel-card-header">
              <h1>٬٬</h1>
            </div>
            <div className="carousel-card-body">
              <p>
                Esta es una plataforma web turística, su uso es para la
                administración de los datos de su versión de aplicación.
                Desarrollada por la empresa Bitproy, mi desempeño en este
                proyecto fue el desarrollo del frontend con tecnologías web e
                integración de APIs
              </p>
            </div>
            <div className="carousel-card-footer">
              <div className="card-footer-cont">
                <div className="card-img-cont">
                  <img
                    src="./public/img/projects/equatorian/index.svg"
                    alt="index-equatorian"
                  />
                </div>
                <div>
                  <a href="./routes/equatorian/equatorian.html">
                    <h4>EQUATOR-IAN</h4>
                  </a>
                </div>
                <div>
                  <i className="bi-github" role="img" aria-label="GitHub"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-card">
            <div className="carousel-card-header">
              <h1>٬٬</h1>
            </div>
            <div className="carousel-card-body">
              <p>
                Esta es una aplicación mobil de delivery desarrollada por la
                empresa Bitproy, mi desempeño en este proyecto fue el desarrollo
                del frontend con tecnologías móviles e integración de APIs.
              </p>
            </div>
            <div className="carousel-card-footer">
              <div className="card-footer-cont">
                <div className="card-img-cont">
                  <img
                    src="./public/img/projects/rapientrega/index.svg"
                    alt="index-rapientrega"
                  />
                </div>
                <div>
                  <a href="./routes/rapientrega/rapientrega.html">
                    <h4>RAPIENTREGA</h4>
                  </a>
                </div>
                <div>
                  <i className="bi-github" role="img" aria-label="GitHub"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-card">
            <div className="carousel-card-header">
              <h1>٬٬</h1>
            </div>
            <div className="carousel-card-body">
              <p>
                Esta es una plataforma web dirigida hacia al monitoreo para la
                seguridad de los ciudades por sectores. Desarrollada por la
                empresa Bitproy, mi desempeño en este proyecto fue el desarrollo
                del frontend con tecnologías web e integración de APIs
              </p>
            </div>
            <div className="carousel-card-footer">
              <div className="card-footer-cont">
                <div className="card-img-cont">
                  <img
                    src="./public/img/projects/weu/index.svg"
                    alt="index-weu"
                  />
                </div>
                <div>
                  <a href="./routes/weu/weu.html">
                    <h4>WE'U</h4>
                  </a>
                </div>
                <div>
                  <i className="bi-github" role="img" aria-label="GitHub"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
