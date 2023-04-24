import estilo from "./Navbar.module.css";
import { CartWidgetContainer } from "../CartWidget/CartWidgetContainer";
import imgLogo from "../../assets/images/Datacom Isotipo.png";
import { Outlet, Link } from "react-router-dom";
import { Footer } from "../../Footer";

export const NavbarContainer = () => {
  return (
    <>
      <div className={estilo.ContainerNavbar}>
        <div className={estilo.datacom}>
          <Link to="/">
            <img src={imgLogo} className={estilo.imgLogo} alt="Logo Datacom" />
          </Link>
        </div>

        <ul className={estilo.ContainerNavbarLi}>
          <li>Motherboards</li>
          <li>Procesadores</li>
          <li>Memorias</li>
          <li>Placas de video</li>
          <li>Discos</li>
          <li>Fuentes</li>
          <li>Gabinetes</li>
        </ul>
        <div className={estilo.CarWidget}>
          <CartWidgetContainer />
        </div>
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </>
  );
};
