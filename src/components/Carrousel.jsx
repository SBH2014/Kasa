
import { useState  } from 'react';
import vectorDroite from "../assets/vectorDroite.png";
import vectorGauche from "../assets/cevtorGauche.png"
function Carousel ({slides}){

  const [index,setIndex] = useState(0)

  const totalPictures = slides.length-1 // nombre max d'images
console.log(slides.length-1)
  if (index < 0) setIndex(totalPictures)  
  if (index > totalPictures) setIndex(0)  // si supérieur au max d'images, alors met à zéro

  return(
<div >
    <div className='carrousel'>
        <img  src={slides[index+1]} alt="" />
    </div>
     {/* si plus d'une image, alors ce code sera exécuté */}
     {totalPictures > 0 && ( 
                <div> 
                    <button className="carrousel__button" onClick={() => setIndex(index - 1)}> 
                        <img src={vectorGauche} className='carrousel__vetorLeft' alt={'flèche gauche pour changer de photo '+index} />
                    </button>
                    <button className="carrousel__button" onClick={() => setIndex(index + 1)}> 
                        <img src={vectorDroite} className='carrousel__vectorRight' alt={'flèche droite pour changer de photo '+index} />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (
                // compteur d'images qui ne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images
                <div className='div-compteur'> 
                    <p className='carrousel__counter-pic'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )
}
 

export default Carousel