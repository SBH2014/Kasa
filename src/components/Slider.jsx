import React , { useState  } from "react"  


import BtnSlider from "./BtnSlider"

function Slider({pictures}){
    const [slideIndex,setSlideIndex] = useState(0)

    const nextSlide = () => {
        if (slideIndex !== pictures.length ){
            setSlideIndex(slideIndex + 1)
        }
        else if ( slideIndex === pictures.length){
            setSlideIndex(0)
        }

    }
    const prevSlide = () => {
        if (slideIndex !== pictures.length ){
            setSlideIndex(slideIndex - 1)
        }
        else if ( slideIndex === 0){
            setSlideIndex(pictures.length)
        }
    }
return (
    <div>
    <div className='carrousel'>
        <img src={pictures[slideIndex+1]} alt="" />
    </div>
    <BtnSlider moveSlide = {nextSlide} direction = {"next"}/>
    <BtnSlider  moveSlide = {prevSlide} direction = {"prev"}/>
    
    </div>
)
}
export default Slider