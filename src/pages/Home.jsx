//import React,{useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultPicture from '../assets/card.jpg'
import "../public/css/style.css"
import Banner from '../components/Banner';

import Card from '../components/Card';
function Home() {
    const logementCard = [
        {
            name: 'Jane Doe',
            picture: DefaultPicture,
        },
        {
            name: 'John Doe',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            picture: DefaultPicture,
        },
    ]
       
    return <div>
        <Banner/>
        
        {logementCard.map((profile,index)=>(
               <Card
               key={`${profile.name}-${index}`}
               picture={profile.picture}
               title ={profile.name}
               />
        )
        )}
      
    </div>;
}
export default Home