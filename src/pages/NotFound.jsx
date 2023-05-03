import error404 from "../assets/404.png";
import { Link } from "react-router-dom";
import "../public/css/style.css";
import "../public/css/notFound.css"

function NotFound (){
    return ( 
    <div className="error">
        <img src= {error404} alt="error" />
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <p><Link  to="/">Retourner sur la page d’accueil</Link></p>
        
    </div>)
   
}
export default NotFound