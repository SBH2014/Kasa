
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Card( ) {
    const [LogementData, setLogementData] = useState([])
    useEffect(()=>{
        
        axios.get('../data.json').then(function(res){
           setLogementData(res.data)
        })
    },[])
    if(!LogementData.length){
        return <div>Loading ...</div>
    }
     return (
         <div className='logements'>
        {LogementData.map((card)=>(
        <Link to={{ pathname: "/Logement", search: "?_id="+ card.id }} className='logements__fiche' key={card.id} >
            <img src={card.cover} alt="card" />
            <h3>{card.title}</h3>
        </Link>
     ))}
           </div>)}
  


Card.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Card