import {useState} from "react";
import {LineWobble} from "@uiball/loaders";

interface IPropsGridItem {
  img: string;
  ind: number;
  classNameItem?: string;
}
export const GridItem = ({img, ind, classNameItem}: IPropsGridItem) => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className={`grid-item-project ${classNameItem || ""}`}>
      {loading === true && (
        <div className="cont-loading-img">
          <LineWobble size={50} color="var(--sub-primary-color)" />
        </div>
      )}
      <a href={img} target="_blank">
        <img
          src={img}
          alt={`image${ind}`}
          loading="lazy"
          onLoadedData={() => setLoading(false)}
          onLoadCapture={() => setLoading(false)}
        />
      </a>
    </div>
  );
};
