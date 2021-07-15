import { NavLink } from "react-router-dom";
import Weather from "./weather";

const Navigation = ({showNav}) => {
    return ( 
        <nav className="nav">
            <NavLink onClick={()=>showNav()} className="nav__item" exact to="/">O nas</NavLink>
            <NavLink onClick={()=>showNav()} className="nav__item" to="/aktualnosci">Aktualności</NavLink>
            <NavLink onClick={()=>showNav()} className="nav__item"  to="/galeria">Galeria</NavLink>
            <NavLink onClick={()=>showNav()} className="nav__item"  to="/kontakt">Kontakt</NavLink>
            <NavLink onClick={()=>showNav()} className="nav__item"  to="/oferta">Oferta</NavLink>
            <Weather/>
            {/* <a href="http://facebook.pl" target="_blank"><i className="fab fa-facebook-f"></i></a> */}
        </nav>
     );
}
 
export default Navigation;