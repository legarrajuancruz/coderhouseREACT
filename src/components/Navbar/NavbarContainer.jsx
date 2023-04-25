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
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Todos
          </Link>
          <Link
            to="/categoria/motherboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            Motherboards
          </Link>
          <Link
            to="/categoria/procesador"
            style={{ color: "white", textDecoration: "none" }}
          >
            Procesadores
          </Link>
          <Link
            to="/categoria/video"
            style={{ color: "white", textDecoration: "none" }}
          >
            Placas de video
          </Link>
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
