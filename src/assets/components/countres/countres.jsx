import React, { use } from 'react';
import Country from '../country/country';

const Countres = ({fetchPromis}) => {
    const countresData = use(fetchPromis)
    const countres = countresData.countries
    // console.log(countres)
    return (
        <div>
            <h3>I am a good boy : {countres.length}</h3>
           {
            countres.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
           }
        </div>
    );
};

export default Countres;