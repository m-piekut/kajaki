import NavBtn from './components/navBtn'
import {ReactComponent as Logo} from './images/logo.svg'


const Header = ({showNav}) => {
    return ( 
        <header className="header">
            <Logo className="header__logo"/>
            <h1 className="header__title"> Kajakiem po Tanwi i Ładzie</h1>
            <NavBtn showNav={showNav} />
        </header>
     );
}
 
export default Header;