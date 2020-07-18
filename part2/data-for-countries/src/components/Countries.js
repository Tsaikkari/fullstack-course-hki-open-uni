import React from 'react';

const Countries = (props) => {
  return (
    <div>
      {props.filteredCountries.length > 10 
      ? <p>Too many matches, specify another filter</p>
      : props.filteredCountries.map((country, i) => 
        <p key={i}>{country.name}</p>
      )}
    </div>
  )
}

export default Countries

