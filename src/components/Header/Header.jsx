import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.container}>
      <p className={style.logo}>TraverTrucks</p>
      <nav className={style.navLinks}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </nav>
    </header>
  );
};

export default Header;
