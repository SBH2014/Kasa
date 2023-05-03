import arrowUp from "../assets/arrow2.png" ;
import arrowDown from '../assets/arrow.png';
import { useState } from "react";
function Collapse(){
    const data = [
        {
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            title:"Respect",
              content :"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title : "Service",
            content : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            title:"Sécurité",
            content : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"
        }
    ]

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
            {
                data.map((item,i) => (
                    <div className="collapse__item" key={item.title}>
                        <div className="collapse__item-title" onClick={ () => viewContent(i)}>
                            <h3>{item.title}</h3>
                            <img src={selected === i  ? arrowUp : arrowDown} alt="arrow_collapse" />
                        </div>
                        <div className={ selected === i ? "collapse__item-contentShow" : "collapse__item-content" }>
                            <p>{item.content}</p>
                        </div>
                    </div>
))
            }

        </div>
   
    </div>

)

}
export default Collapse