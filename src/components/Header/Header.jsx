import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../../assets/Logo.svg";

const Header = () => {
  const navClasses = ({ isActive }) => (isActive ? style.active : "");
  return (
    <header className={style.container}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className={style.navLinks}>
        <NavLink to="/" className={navClasses}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={navClasses}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
