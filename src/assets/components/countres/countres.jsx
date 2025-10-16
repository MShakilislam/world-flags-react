import React, { use, useState } from 'react';
import Country from '../country/country';
import './countres.css'

const Countres = ({ fetchPromis }) => {
    const [visitedCountres, setVisitedCountres] = useState([])
    
    const handalVisitedCountres = (country) => {
        console.log("handale VisitedCountres",country)
    }

    const countresData = use(fetchPromis)
    const countres = countresData.countries
    // console.log(countres)
    return (
        <div>
            <h3>I am a good boy : {countres.length}</h3>
            <h2>Visited Country : </h2>
            <div className='countres'>
                {
                    countres.map(country => <Country key={country.cca3.cca3} country={country} handalVisitedCountres={handalVisitedCountres}></Country>)
                }
            </div>
        </div>
    );
};

export default Countres;