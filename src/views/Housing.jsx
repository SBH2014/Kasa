import React from 'react';
import { useState, useEffect } from 'react'
import { useSearchParams, Navigate } from 'react-router-dom'
import axios from 'axios';
import Header from '../Layout/Header';
import greyStar from '../assets/grey-star.png'
import redStar from "../assets/red-star.png"
import Carousel from "../components/Carousel"
import Collapse from '../components/Collapse';
import Footer from '../Layout/Footer';
import "../styles/pages/_housing.scss";


function Housing() {

    const [searchParams] = useSearchParams();
    const [idhousing] = useState(searchParams.get('_id'));
    const [housing, setHousing] = useState(null);
    const arrayStars = [1, 2, 3, 4, 5]
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        function fetchDataByid() {
            axios.get('../data.json').then(function (res) {
                setHousing(res.data.find(data => data.id === idhousing))
                setLoading(false)
            })
        }
        fetchDataByid()

    }, [idhousing])
    if (loading) {
        return <div className='loader'></div>
    }
    if (!housing) {
        return ((<Navigate replace to="/404" />)
        )
    }
    const equipements = housing.equipments.map((element, index) => (
        <li className='collapse__housing-li' key={"equipement-" + index}>{element}</li>
    ))

    return (
        <>
            <Header />
            <div className='content__rules'>
                <Carousel slides={housing.pictures} title={housing.title} />
                <div className='content' >
                    <div className='content__title' >
                        <h1>{housing.title}</h1>
                        <p className='content__title-p'>{housing.location}</p>
                        <div className='content__tags'>
                            {housing.tags.map((element, index) => {
                                return (<p className='content__tags-list' key={"tags" + index}>{element}</p>)
                            }
                            )}
                        </div>
                    </div>
                    {/*Nom du prop et sa photo*/}
                    <div className='content__blocHost'>
                        <div className='content__blocHost-host'>
                            <p>{housing.host.name}</p>
                            <img src={housing.host.picture} key={housing.host.name} alt={housing.title} />
                        </div>
                        <div className='content__blocHost-stars'>
                            {
                                arrayStars.map((index, element) => {
                                    const hostStars = parseInt(housing.rating)

                                    return (

                                        <img key={hostStars.rating + index} src={element >= hostStars ? greyStar : redStar} alt="" />
                                    )
                                })
                            }
                        </div>
                    </div>


                </div>
                <div className='collapse__housing '>
                    <Collapse title="Description" content={housing.description} />
                    <Collapse title="Equipements" content={equipements} />
                </div>
            </div>
            <Footer />
        </>


    )
}
export default Housing