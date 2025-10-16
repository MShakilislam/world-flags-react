import React from 'react';
import './country.css'

const Country = ({country}) => {
    console.log(country.area.area)
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <h2>Population : {country.population.population}</h2>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" :"Small Country"}</p>
        </div>
    );
};

export default Country;