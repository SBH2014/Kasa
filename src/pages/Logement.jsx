import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Logement() {
    const {pictureNumber}  = useParams();
    const pictureNumberint = parseInt(pictureNumber)
    const nextPicture = pictureNumberint + 1
    const prevPicture = pictureNumberint === 1 ? 1 : pictureNumberint - 1
    return (<div>
        <h1>Page logement 🏠</h1>
        <h2>Question {pictureNumber}</h2>
        <nav>
        <Link to ={`/Logement/${prevPicture}`}>Précédents</Link>
        {pictureNumberint === 5 ? (
        <Link to={`/Logement/${prevPicture}`}></Link>
      ) : (
        <Link to={`/Logement/${nextPicture}`}>Suivant</Link>
      )}
        </nav>
    </div>);
}
export default Logement