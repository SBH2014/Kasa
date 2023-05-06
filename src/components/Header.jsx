import { Link } from 'react-router-dom'
import '../public/css/style.css'
import logo from '../assets/logo_kasa.svg'
import { useLocation } from "react-router-dom";

function Navbar() {
 const location = useLocation();
    return (
        < div className='header'>
       <Link to="/">
          <img src={logo} alt="Logo de Kasa" className='header__logo'/>
          </Link>
          <nav className='header__link' >
        <Link  to="/" className = {location.pathname === "/" ? "header__a-active" : "header__a-nonactive"} >Accueil</Link> 
        <Link to="/Apropos/" className = {location.pathname === "/Apropos/" ? "header__a-active" : "header__a-nonactive"}>A Propos</Link>
          </nav>
        </div>
       
    )
}

export default Navbar