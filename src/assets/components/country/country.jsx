import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handalVisitedCountres, handalVisitedFlag }) => {
    const [Visited, setVisited] = useState(false)
    // console.log(country.area.area)

    const halndleClicked = () => {
        // basyic syste 
        // if(Visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // 2 secound system 
        // setVisited(Visited ? false : true)
        // 3 third system 
        setVisited(!Visited)
        handalVisitedCountres(country)

    }

    return (
        <div className={`country  ${Visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <h2>Population : {country.population.population}</h2>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={halndleClicked}>{Visited ? "Visited" : "Not Visited"}</button>
            <button onClick={() => {handalVisitedFlag(country.flags.flags.png)}}>Add Visited</button>
        </div>
    );
};

export default Country;