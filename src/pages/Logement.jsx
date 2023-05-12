import React from 'react';
import {useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import greyStar from '../assets/grey-star.png'
import redStar from "../assets/red-star.png"
import Carrousel from "../components/Carrousel"
import Collapse from '../components/Collapse';
import NotFound from "../pages/NotFound";
import "../public/css/style.css";
import "../public/css/logement.css";



//import { Link, useParams } from 'react-router-dom';

function Logement() {
   
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));
    const [currentIndex, setCurrentUser] = useState(null);
    const arrayStars  = [1, 2, 3, 4, 5]

    useEffect(()=>{
        function fetchDataByid () {axios.get('../data.json').then(function(res){
            setCurrentUser(res.data.find( data => data.id === idLogement ))

        })}
      fetchDataByid()  
      
    },[idLogement])
    if(!currentIndex){
        return ( (<NotFound />)
        )
    }
    const equipements = currentIndex.equipments.map((element, index) => (
        <li  className='collapse__logement-li' key={"equipement-"+index}>{element}</li>
      ))

    return ( 
        <div className='content__rules'>
        <Carrousel slides={currentIndex.pictures}/>
        
        <div className='content' >
            
            <div className='content__title' >
                <h1>{currentIndex.title}</h1>
                <p className='content__title-p'>{currentIndex.location}</p>
                <div className='content__tags'>
                {currentIndex.tags.map((element, index) =>{
                    return (<p className='content__tags-list' key={"tags"+index}>{element}</p>)
                    }
                   
                    )}
                </div>
            </div>
            {/*Nom du prop et sa photo*/}
            <div className='content__blocHost'>
                <div className='content__blocHost-host'>
                    <p>{currentIndex.host.name}</p>
                    <img src={currentIndex.host.picture} key={currentIndex.host.name} alt={currentIndex.title} />
                </div>
                <div className='content__blocHost-stars'>
                 {
                    arrayStars.map((index,element)=>{
                        const hostStars = parseInt(currentIndex.rating)
        
                        return(
                            
                            <img key={currentIndex.rating + index } src={ element >= hostStars  ? greyStar : redStar } alt="" />
                        )
                    })
                 }
    
                </div>
              

            </div>
      
    
        </div>
        <div className='collapse__logement '>
                    <Collapse title="Description" content={currentIndex.description}/>
                    <Collapse title="Equipements" content={equipements} />
      </div>

        </div>
      
)}
export default Logement