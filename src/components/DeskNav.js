import { NavLink } from "react-router-dom";


const DeskNav = () => {
    return ( 
        <nav className="deskNav">
            <NavLink className="deskNav__item" exact to="/">O nas</NavLink>
            <NavLink className="deskNav__item" to="/aktualnosci">Aktualności</NavLink>
            <NavLink className="deskNav__item"  to="/galeria">Galeria</NavLink>
            <NavLink className="deskNav__item"  to="/kontakt">Kontakt</NavLink>
            <NavLink className="deskNav__item"  to="/oferta">Oferta</NavLink>
        </nav>
    );
}
 
export default DeskNav;