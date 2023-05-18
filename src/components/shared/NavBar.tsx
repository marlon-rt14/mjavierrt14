import {useLayoutEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Toggle} from "rsuite";
import fondo from "../../assets/img/fondo.svg";
import imageHeader from "../../assets/img/home-intellisense.svg";
import {US, ES} from "country-flag-icons/react/3x2";

const runEvents = () => {
  const nav: any = document.querySelector(".nav");
  const brandSpan: any = document.getElementById("brand-span");

  const navLinks = document.querySelectorAll(".nav-link");
  const navItems: any = document.querySelectorAll(".nav-item");

  const navUlCont: any = document.querySelector(".nav__ul-cont");

  const navResButton = document.querySelector(".nav-res-button");

  const itemRes = document.querySelectorAll(".item-res");

  const brandH1: any = document.getElementById("brand-h1");

  const iconMenu: any = document.getElementById("icon-menu");

  const bgTransparent = "transparent";
  const gradientText = "var(--gradien-color-text)";
  const gradientBox = "var(--gradient-color-box)";

  let flag = false;
  let toggleItemRes = false;
  const resMobile = 720;

  window.addEventListener("scroll", (e) => {
    verifyScroll();
  });

  function removeItemsHover() {
    let valor;
    for (const navItem of navItems) {
      navItem.addEventListener("mouseover", (e: any) => {
        navItem.style.background = bgTransparent;
        navItem.style.boxShadow = `0px 0px 20px 2px ${bgTransparent}`;
      });
      // navItem.addEventListener("mouseleave", (e) => {
      //   navItem.style.background = bgTransparent;
      // });
    }
  }

  function addItemsHover() {
    let valor;
    for (const navItem of navItems) {
      navItem.addEventListener("mouseover", (e: any) => {
        navItem.style.background = gradientBox;
        navItem.style.boxShadow = `0px 0px 20px 2px var(--secondary-color)`;
      });
      navItem.addEventListener("mouseleave", (e: any) => {
        navItem.style.background = bgTransparent;
        navItem.style.boxShadow = `0px 0px 20px 2px ${bgTransparent}`;
      });
    }
  }

  navResButton!.addEventListener("click", () => {
    flag = !flag;
    navUlCont.style.left = flag ? 0 : "-100vw";
    if (window.scrollY > 0) {
      nav.style.paddingTop = "1.5rem";
    }
    verifyFlag();
  });

  const verifyScroll = () => {
    if (window.scrollY === 0) {
      nav.style.background = flag ? "var(--sub-primary-color)" : bgTransparent;
      nav.style.position = "static";
      nav.style.paddingTop = "1.5rem";
      addItemsHover();
      navUlCont.style.top = "calc(2em + 1em + 2rem)";
      navUlCont.style.height = "calc((100vh) - (.1.5rem))";
      verifyMobileResponsive();
      brandSpan.style.background = flag ? "transparent" : gradientText;
      brandSpan.style.webkitTextFillColor = flag ? "white" : bgTransparent;
      brandSpan.style.backgroundClip = "text";
      brandSpan.style.webkitBackgroundClip = "text";
    } else {
      //   nav.style.background = gradientBox;
      nav.style.background = flag
        ? "var(--sub-primary-color)"
        : "var(--section-color)";
      nav.style.position = "fixed";
      nav.style.paddingTop = flag ? "1.5rem" : "0rem";
      // brandSpan.style.background = bgTransparent;
      // brandSpan.style.webkitTextFillColor = "#fff";
      // removeItemsHover();
      // navUlCont.style.top = "calc(1.4em + 2rem)";
      // navUlCont.style.height = "calc((100vh) - (1.4em + 2rem))";
      // verifyMobileResponsive();
    }
  };

  const verifyMobileResponsive = () => {
    if (window.screen.width <= resMobile && window.scrollY > 0) {
      brandH1.style.fontSize = "1.1em";
      brandH1.style.lineHeight = 0;
      brandSpan.style.fontSize = "1.1em";
    } else {
      // para desktop
      brandH1.style.fontSize = "1em";
      brandSpan.style.fontSize = "1em";
    }
  };

  const verifyFlag = () => {
    if (flag) {
      nav.style.background = "var(--sub-primary-color)";
      brandSpan.style.background = bgTransparent;
      brandSpan.style.webkitTextFillColor = "#fff";
      iconMenu.classList.remove("fa-bars");
      iconMenu.classList.add("fa-times");
    } else {
      iconMenu.classList.remove("fa-times");
      iconMenu.classList.add("fa-bars");
      verifyScroll();
    }
  };

  itemRes.forEach((item, ind) => {
    item.addEventListener("click", () => {
      console.log(item);
      console.log(window.scrollY);
      flag = !flag;
      navUlCont.style.left = flag ? 0 : "-100vw";
      iconMenu.classList.toggle("fa-bars");
      iconMenu.classList.toggle("fa-times");
      switch (ind) {
        case 0:
          window.scrollTo({top: 0});
          break;
        case 1:
          window.scrollTo({top: 390});
          break;

        default:
          break;
      }
      verifyFlag();
    });
  });

  window.addEventListener("scroll", () => verifyScroll());
};

const words = [
  "Freelancer",
  "Web developer",
  "Backend developer",
  "Data science learner",
];

const runTyping = () => {
  let i = 0;
  setInterval(() => {
    if (i >= words.length - 1) i = 0;
    else i++;
    //let contador: any = document.querySelector(".contador");
    //contador.textContent = `${i} - ${"a"}`;
    let type_text: any = document.querySelector(".key-text");
    type_text.textContent = words[i];
    //type_text.style.animation = `typing 2s steps(${words[i].length}, end) infinite alternate`;
    //type_text.style.animation = `typing 2s  infinite alternate ease-in-out`;
    type_text.style.width = `${
      i === 0 ? 9 : i === 1 ? 13 : i === 2 ? 16 : 17
    }ch`;
  }, 4000);
};

export const NavBar = () => {
  const {t, i18n} = useTranslation();

  useLayoutEffect(() => {
    runEvents();
    let type_text: any = document.querySelector(".key-text");
    type_text.textContent = words[0];
    runTyping();
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav">
        <div className="container-brand">
          <a className="container-brand__a" href="/">
            <h1 id="brand-h1">{t("port")}</h1>
            <span id="brand-span" className="">
              olio.
            </span>
          </a>
        </div>
        <ul className="nav__ul">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#header">
              {t("navHome")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-about">
              {t("navAbout")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-skills">
              {t("navSkills")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-projects">
              {t("navProjects")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section-contact">
              {t("navContact")}
            </a>
          </li>
          <li className="" style={{listStyle: "none"}}>
            <Toggle
              checkedChildren={<ES />}
              unCheckedChildren={<US />}
              onChange={(checked) => {
                if (checked) {
                  i18n.changeLanguage("en");
                } else {
                  i18n.changeLanguage("es");
                }
              }}
            />
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
                  {t("navHome")}
                </a>
              </li>
              <li className="nav-item-res">
                <a href="#section-about" className="item-res">
                  {t("navAbout")}
                </a>
              </li>
              <li className="nav-item-res">
                <a href="#section-skills" className="item-res">
                  {t("navSkills")}
                </a>
              </li>
              <li className="nav-item-res">
                <a href="#section-projects" className="item-res">
                  {t("navProjects")}
                </a>
              </li>
              <li className="nav-item-res">
                <a href="#section-contact" className="item-res">
                  {t("navContact")}
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
      <div className="header__div-container">
        <form className="header__form">
          <p>{t("hello my name is")}</p>
          <h2>Marlon Javier Ruiz</h2>
          <p className="contador" hidden></p>
          <p>
            {t("i am")} &nbsp; <span className="key-text"></span>
          </p>
          <div className="form-footer ">
            <a href="#section-contact" className="button">
              {t("contact me")}
            </a>
          </div>
        </form>
        <div className="form-img-cont">
          <img src={imageHeader} alt="image-header" />
        </div>
      </div>
    </header>
  );
};
