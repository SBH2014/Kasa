import React from 'react';
import {useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import "../public/css/style.css";
import "../public/css/logement.css"
import { element } from 'prop-types';


//import { Link, useParams } from 'react-router-dom';

function Logement() {
   
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));
    const [currentIndex, setCurrentUser] = useState([]);
    const arrayStars  = [1, 2, 3, 4, 5]

    useEffect(()=>{
        function fetchDataByid () {axios.get('../data.json').then(function(res){
            setCurrentUser(res.data.find( data => data.id === idLogement ))

        })}
      fetchDataByid()  
    },[])

    if(!currentIndex){
        return <div>Loading ...</div>
    }

    return ( 
        <>
          <div className='carrousel'> </div>
        
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
                    <img src={currentIndex.host.picture} alt={currentIndex.title} />
                </div>
                <div className='content__blocHost-stars'>
                 {
                    arrayStars.map(element=>{
                        const hostStars = parseInt(currentIndex.rating)
                        return(
                            <span >★</span>
                        )
                    })
                 }
    
                </div>

            </div>
    
        </div>;
        </>
      
)}
export default Logement