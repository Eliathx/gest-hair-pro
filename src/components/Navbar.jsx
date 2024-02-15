import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <h2>GestHairPro</h2>
      <ul>
        <Link to="/">
          <li>Inicio</li>
        </Link>
        <Link to="/clientes">
          <li>Clientes</li>
        </Link>
        <Link to="/productos">
          <li>Productos</li>
        </Link>
        <Link to="/ventas">
          <li>Ventas</li>
        </Link>
        <Link to="/agenda">
          <li>Agenda</li>
        </Link>
        <Link to="/administración">
          <li>Administración</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
