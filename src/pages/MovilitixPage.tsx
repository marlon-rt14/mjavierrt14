import {ProjectTemplate} from "../components/shared/ProjectTemplate";
import {GridItem} from "../components/shared/GridItem";

import imagen1 from "../assets/img/projects/movilitix/imagen1.svg";
import imagen2 from "../assets/img/projects/movilitix/imagen2.svg";
import imagen3 from "../assets/img/projects/movilitix/imagen3.svg";
import imagen4 from "../assets/img/projects/movilitix/imagen4.svg";
import imagen5 from "../assets/img/projects/movilitix/imagen5.svg";
import imagen6 from "../assets/img/projects/movilitix/imagen6.svg";
import imagen7 from "../assets/img/projects/movilitix/imagen7.svg";
import imagen8 from "../assets/img/projects/movilitix/imagen8.svg";
import imagen9 from "../assets/img/projects/movilitix/imagen9.svg";
import imagen10 from "../assets/img/projects/movilitix/imagen10.svg";
import imagen11 from "../assets/img/projects/movilitix/imagen11.svg";

const GALLERY = [
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
  imagen9,
  imagen10,
  imagen11,
];

export const MovilitixPage = () => {
  return (
    <ProjectTemplate type="gallery-project-mobile" title="Mobile Application">
      {GALLERY.map((img, ind) => {
        return <GridItem key={ind} img={img} ind={ind} />;
      })}
    </ProjectTemplate>
  );
};
