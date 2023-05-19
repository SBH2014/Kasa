import error404 from "../assets/404.png";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/pages/_not_found.scss";


function NotFound() {
    return (
        <>
            <Header />
            <div className="error">
                <img src={error404} alt="error" />
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <p><Link to="/">Retourner sur la page d’accueil</Link></p>

            </div>
            <Footer />
        </>
    )

}
export default NotFound