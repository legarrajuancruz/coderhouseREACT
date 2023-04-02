import estilo from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={estilo.ContainerNavbar}>
      <ul>
        <li>Productos</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};
