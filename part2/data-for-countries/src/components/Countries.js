import React from 'react';
import Country from './Country';

const Countries = (props) => {
  return (
    <div>
      {props.filteredCountries.map((country, i) => 
        <div key={i}>
        <span>{country.name}</span>
        <button onClick={() => props.showDetails(country.name)}>show</button>
          {country.name === props.detailCountry.name
          ? <Country country={country} showCountry={props.showCountry}/>
          : null
        }
        </div>
      )}
    </div>
  )
}

export default Countries

