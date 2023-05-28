import { useState } from "react";
import vectorDroite from "../assets/vectorDroite.png";
import vectorGauche from "../assets/cevtorGauche.png";
function Carousel({ slides, title }) {
  const [index, setIndex] = useState(0);
  const totalPictures = slides.length - 1; // nombre max d'images
  if (index < 0) setIndex(totalPictures); // définit le nombre max d'images
  if (index > totalPictures) setIndex(0); // si supérieur au max d'images, alors remise à zéro

  return (
    <div className="position">
      {/* si une seule  image, alors ce code sera exécuté */}
      <div className="carousel">
        <img src={slides[index]} alt={"photo " + title} key={"card-" + index} />
      </div>
      {/* si plus d'une image, alors ce code sera exécuté */}
      {totalPictures > 0 && (
        <div>
          <button
            className="carousel__button"
            onClick={() => setIndex(index - 1)}
          >
            <img
              src={vectorGauche}
              className="carousel__vetorLeft"
              alt={"flèche gauche pour changer la photo" + index}
            />
          </button>
          <button
            className="carousel__button"
            onClick={() => setIndex(index + 1)}
          >
            <img
              src={vectorDroite}
              className="carousel__vectorRight"
              alt={"flèche droite pour changer la photo" + index}
            />
          </button>
        </div>
      )}
      {/*compteur d'images qui ne s'affiche qu'en version Desktop et quand il y a  plusieurs images*/}
      {totalPictures > 0 && (
        <div>
          <p className="carousel__counter-pic">
            {index + 1}/{totalPictures + 1}
          </p>
        </div>
      )}
    </div>
  );
}

export default Carousel;
