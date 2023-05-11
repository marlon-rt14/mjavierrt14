import {Route, Routes} from "react-router-dom";
import "../styles/normalize.css";
import "../styles/main.css";
import "../styles/animations.css";
import {MainLayout} from "../components/shared/MainLayout";

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<p>Hola marlon</p>} />
        </Route>
      </Routes>
    </>
  );
};
