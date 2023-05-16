import {ProjectTemplate} from "../components/shared/ProjectTemplate";
import {GridItem} from "../components/shared/GridItem";

import imagen1 from "../assets/img/projects/equatorian/imagen1.svg";
import imagen2 from "../assets/img/projects/equatorian/imagen2.svg";
import imagen3 from "../assets/img/projects/equatorian/imagen3.svg";
import imagen4 from "../assets/img/projects/equatorian/imagen4.svg";
import imagen5 from "../assets/img/projects/equatorian/imagen5.svg";

const GALLERY = [imagen1, imagen2, imagen3, imagen4, imagen5];

export const EquatorianPage = () => {
  return (
    <ProjectTemplate type="gallery-project" title="WEB PLATFORM">
      {GALLERY.map((img, ind) => {
        return <GridItem key={ind} img={img} ind={ind} />;
      })}
    </ProjectTemplate>
  );
};
