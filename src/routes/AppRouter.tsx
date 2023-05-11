import {Route, Routes} from "react-router-dom";
import "../styles/normalize.css";
import "../styles/main.css";
import "../styles/animations.css";
import {MainLayout} from "../components/shared/MainLayout";
import {HomePage} from "../pages/HomePage";

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
