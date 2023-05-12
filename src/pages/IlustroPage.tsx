import {ProjectTemplate} from "../components/shared/ProjectTemplate";

import imagen1 from "../assets/img/projects/illustro/image1.svg";
import imagen2 from "../assets/img/projects/illustro/image2.svg";
import imagen3 from "../assets/img/projects/illustro/image3.svg";
import imagen4 from "../assets/img/projects/illustro/image4.svg";
import imagen5 from "../assets/img/projects/illustro/image5.svg";
import imagen6 from "../assets/img/projects/illustro/image6.svg";
import imagen7 from "../assets/img/projects/illustro/image7.svg";
import {Link} from "react-router-dom";

const GALLERY = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7];

export const IlustroPage = () => {
  return (
    <ProjectTemplate type="gallery-project" title="WEB PLATFORM">
      {GALLERY.map((img, ind) => {
        return (
          <div>
            <a href={img} target="_blank">
              <img src={img} alt={`image${ind}`} />
            </a>
          </div>
        );
      })}
    </ProjectTemplate>
  );
};
