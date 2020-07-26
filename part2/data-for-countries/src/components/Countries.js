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
          <h2>Weather in {country.capital}</h2>
          <p><strong>overview:</strong> {props.weather.description}</p>
          <p><strong>temperature:</strong> {props.weather.temperature}</p>
          <img className="weather-icon" src={props.weather.imageURL} alt="icon"/>
          <p><strong>wind speed:</strong> {props.weather.windSpeed}</p>
          </div>
          }
        </div>
      )}
    </div>
  )
}

export default Countries

