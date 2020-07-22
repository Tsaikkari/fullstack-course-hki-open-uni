import React from 'react';
import Country from './Country';

const Countries = (props) => {
  return (
    <div>
      {props.filteredCountries.map((country, i) => 
        <div key={i}>
        <span className="country">{country.name} </span>
        <button className="button" onClick={() => props.showDetails(country.name)}>show</button>
          {country.name === props.detailCountry.name
          && <div><Country country={country} />
          <p>{props.weather}sää</p>
          </div>
        }
        </div>
      )}
    </div>
  )
}

export default Countries

