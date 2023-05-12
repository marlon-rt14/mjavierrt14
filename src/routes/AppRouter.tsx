import {Route, Routes} from "react-router-dom";
import "../styles/normalize.css";
import "../styles/main.css";
import "../styles/animations.css";
import "../styles/gallery-project.css";
import {MainLayout} from "../components/shared/MainLayout";
import {HomePage} from "../pages/HomePage";
import {MovilitixPage} from "../pages/MovilitixPage";
import {IlustroPage} from "../pages/IlustroPage";

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/movilitix" element={<MovilitixPage />} />
        <Route path="/illustro" element={<IlustroPage />} />
      </Routes>
    </>
  );
};
