import estilo from "./Navbar.module.css";
import { CartWidgetContainer } from "../CartWidget/CartWidgetContainer";
import imgLogo from "../../assets/images/Datacom Isotipo.png";

export const NavbarContainer = () => {
  return (
    <div className={estilo.ContainerNavbar}>
      <div className={estilo.datacom}>
        <img src={imgLogo} className={estilo.imgLogo} alt="Logo Datacom" />
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
  );
};
