import React from "react";
import vectorDroite from "../assets/vectorDroite.png"
import vectorGauche from "../assets/cevtorGauche.png";

function BtnSlider(direction , moveSlide){
   
return (
    <div >
   <button  onClick={moveSlide}  className="carrousel__button">
    <img src={vectorGauche } className= 'carrousel__vetorLeft' alt="" />
    <img src={vectorDroite} className='carrousel__vectorRight' alt="" />
   </button>
   </div>
)

}
export default BtnSlider