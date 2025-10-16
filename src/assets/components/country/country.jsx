import React from 'react';

const Country = ({country}) => {
    // console.log(country.cca3.cca3)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <h2>Population : {country.population.population}</h2>
        </div>
    );
};

export default Country;