
import { useState  } from 'react';
import vectorDroite from "../assets/vectorDroite.png";
import vectorGauche from "../assets/cevtorGauche.png"
function Carousel ({slides}){

  const [index,setIndex] = useState(0)
  const totalPictures = slides.length-1  // nombre max d'images 
  if (index < 0) setIndex(totalPictures)  // définit le nombre max d'images
  if (index > totalPictures) setIndex(0)  // si supérieur au max d'images, alors remise à zéro

  return(
<div >
         {/* si une seule  image, alors ce code sera exécuté */}
    <div className='carrousel'>
        <img  src={slides[index]} alt="" />
    </div>
     {/* si plus d'une image, alors ce code sera exécuté */}
     {totalPictures > 0 && ( 
                <div> 
                    <button className="carrousel__button" onClick={() => setIndex(index - 1)}> 
                        <img src={vectorGauche} className='carrousel__vetorLeft' alt={'flèche gauche pour changer la photo'+index} />
                    </button>
                    <button className="carrousel__button" onClick={() => setIndex(index + 1)}> 
                        <img src={vectorDroite} className='carrousel__vectorRight' alt={'flèche droite pour changer la photo'+index} />
                    </button>
                </div>
            )}
            {/*compteur d'images qui ne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images*/}
            {totalPictures > 0 && (

                <div> 
                    <p className='carrousel__counter-pic'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )
}
 

export default Carousel