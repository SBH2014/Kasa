
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Card() {
    const [housingData, sethousingData] = useState([])
    useEffect(() => {

        axios.get('../data.json').then(function (res) {
            sethousingData(res.data)
        })
    }, [])
    if (!housingData.length) {
        return <div className='loader'></div>
    }
    return (
        <div className='div_flex'>
            <div className='housing'>
                {housingData.map((card) => (
                    <Link to={{ pathname: "/Housing", search: "?_id=" + card.id }} className='housing__fiche' key={card.id} >
                        <img src={card.cover} alt={card.title} />
                        <h3>{card.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}



Card.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Card