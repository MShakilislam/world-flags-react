import React, { use, useState } from 'react';
import Country from '../country/country';
import './countres.css'

const Countres = ({ fetchPromis }) => {
    const [visitedCountres, setVisitedCountres] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])

    const handalVisitedCountres = (country) => {
        console.log("handale VisitedCountres", country)
        const newVisitedCountes = [...visitedCountres, country];
        setVisitedCountres(newVisitedCountes)
    }

    const handalVisitedFlag = (flag) => {
        const newVisitedCountry = [...visitedFlag,flag];
        setVisitedFlag(newVisitedCountry)
    }


    const countresData = use(fetchPromis)
    const countres = countresData.countries
    // console.log(countres)
    return (
        <div>
            <h3>I am a good boy : {countres.length}</h3>
            <h2>Visited Country : {visitedCountres.length} </h2>
            <h3>Total visited Flags : {visitedFlag.length}</h3>
            <ol>
                {visitedCountres.map(country => <li>{country.name.common}</li>)}
            </ol>
            <div className='visited-country-flag'>
                {
                    visitedFlag.map(flag => <img src={flag}></img>)
                }
            </div>
            <div className='countres'>
                {
                    countres.map(country => <Country 
                        key={country.cca3.cca3} country={country} 
                        handalVisitedCountres={handalVisitedCountres} 
                        handalVisitedFlag={handalVisitedFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countres;