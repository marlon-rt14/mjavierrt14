import {ProjectTemplate} from "../components/shared/ProjectTemplate";
import {GridItem} from "../components/shared/GridItem";

import imagen1 from "../assets/img/projects/weu/imagen1.svg";
import imagen2 from "../assets/img/projects/weu/imagen2.svg";
import imagen3 from "../assets/img/projects/weu/imagen3.svg";
import imagen4 from "../assets/img/projects/weu/imagen4.svg";

const GALLERY = [imagen1, imagen2, imagen3, imagen4];

export const WeuPage = () => {
  return (
    <ProjectTemplate type="gallery-project" title="WEB PLATFORM">
      {GALLERY.map((img, ind) => {
        return <GridItem key={ind} img={img} ind={ind} />;
      })}
    </ProjectTemplate>
  );
};
