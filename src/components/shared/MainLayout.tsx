import {Outlet} from "react-router-dom";
import {Footer} from "./Footer";
import {NavBar} from "./NavBar";

export const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
