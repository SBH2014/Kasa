import arrowUp from "../assets/arrow2.png" ;
import arrowDown from '../assets/arrow.png';
import { useState } from "react";
function Collapse({title,content,i}){
   

    const [selected ,setSelected]=useState(null)

    const viewContent = (i) => { 
       if(selected === i){
        return setSelected(null)
       } 
           setSelected(i)
    }


return (
    <div className="collapse">
        <div className="collapse__accordion">
            
            
                    <div className="collapse__item" key={title}>
                        <div className="collapse__item-title" onClick={ () => viewContent(i)}>
                            <h3>{title}</h3>
                            <img src={selected === i  ? arrowUp : arrowDown} alt="arrow_collapse" />
                        </div>
                        <div className={ selected === i ? "collapse__item-contentShow" : "collapse__item-content" }>
                            <p>{content}</p>
                        </div>
                    </div>       

        </div>
   
    </div>

)

}
export default Collapse