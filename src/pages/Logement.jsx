import React from 'react';
import Carousel from '../components/Carrousel';


import {useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';

//import { Link, useParams } from 'react-router-dom';

function Logement() {
   
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));
    const [currentIndex, setCurrentUser] = useState([]);

    useEffect(()=>{
        function fetchDataByid () {axios.get('../data.json').then(function(res){
            setCurrentUser(res.data.find( data => data.id === idLogement ))

        })}
      fetchDataByid()  
    },[idLogement])
    if(!currentIndex){
        return <div>Loading ...</div>
    }
   console.log(currentIndex.pictures)
    return ( 
    <div>
    
    </div>);
}
export default Logement