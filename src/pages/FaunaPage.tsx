import {ProjectTemplate} from "../components/shared/ProjectTemplate";

import imagen1 from "../assets/img/projects/fauna/imagen1.png";
import imagen2 from "../assets/img/projects/fauna/imagen2.svg";
import imagen3 from "../assets/img/projects/fauna/imagen3.svg";
import imagen4 from "../assets/img/projects/fauna/imagen4.svg";
import imagen5 from "../assets/img/projects/fauna/imagen5.svg";
import {GridItem} from "../components/shared/GridItem";

const GALLERY = [imagen1, imagen2, imagen3, imagen4, imagen5];

export const FaunaPage = () => {
  return (
    <ProjectTemplate type="gallery-project" title="WEB PLATFORM">
      {GALLERY.map((img, ind) => {
        return (
          <GridItem key={ind} img={img} ind={ind} classNameItem="fauna-main" />
        );
      })}
    </ProjectTemplate>
  );
};
