import { NavLink } from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav className="nav">
            <NavLink className="nav__item" exact to="/">O nas</NavLink>
            <NavLink className="nav__item" to="/aktualnosci">Aktualności</NavLink>
            <NavLink className="nav__item"  to="/sprzet">Sprzęt</NavLink>
            <NavLink className="nav__item"  to="/galeria">Galeria</NavLink>
            <NavLink className="nav__item"  to="/kontakt">Kontakt</NavLink>
            <NavLink className="nav__item"  to="/oferta">Oferta</NavLink>
            <div className="weather"></div>
        </nav>
     );
}
 
export default Navigation;