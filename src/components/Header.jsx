import { Link } from 'react-router-dom'
import '../public/css/style.css'
import logo from '../assets/logo_kasa.svg'
function Navbar() {
    return (
        < div className='header'>
      
       <Link to="/">
          <img src={logo} alt="Logo de Kasa" className='header__logo'/>
          </Link>
          <nav className='header__link' >
        <Link  to="/">Accueil</Link> 
        <Link to="/Apropos/1">A Propos</Link>
          </nav>
          
       
        </div>
       
    )
}

export default Navbar