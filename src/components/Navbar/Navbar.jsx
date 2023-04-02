import estilo from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={estilo.ContainerNavbar}>
      <ul>
        <li>Motherboards</li>
        <li>Procesadores</li>
        <li>Memorias</li>
        <li>Placas de video</li>
        <li>Discos</li>
        <li>Fuentes</li>
        <li>Gabinetes</li>
      </ul>
    </div>
  );
};
