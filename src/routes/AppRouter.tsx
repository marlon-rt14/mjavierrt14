import {Route, Routes} from "react-router-dom";
import "../styles/normalize.css";
import "../styles/main.css";
import "../styles/animations.css";
import "../styles/gallery-project.css";
import "../styles/mobileResponsive.css";
import "../styles/tabletResponsive.css";
import {MainLayout} from "../components/shared/MainLayout";
import {HomePage} from "../pages/HomePage";
import {MovilitixPage} from "../pages/MovilitixPage";
import {IlustroPage} from "../pages/IlustroPage";
import {RapientregaPage} from "../pages/RapientregaPage";
import {DpiposPage} from "../pages/DpiposPage";
import {EquatorianPage} from "../pages/EquatorianPage";
import {WeuPage} from "../pages/WeuPage";
import {FaunaPage} from "../pages/FaunaPage";

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/movilitix" element={<MovilitixPage />} />
        <Route path="/illustro" element={<IlustroPage />} />
        <Route path="/rapientrega" element={<RapientregaPage />} />
        <Route path="/dpipos" element={<DpiposPage />} />
        <Route path="/equatorian" element={<EquatorianPage />} />
        <Route path="/weu" element={<WeuPage />} />
        <Route path="/fauna" element={<FaunaPage />} />
      </Routes>
    </>
  );
};
