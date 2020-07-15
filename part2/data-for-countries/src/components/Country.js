import React from 'react';

const Country = ({ filteredCountry }) => {
  return (
    <div>
      <h1>{filteredCountry.name}</h1>
      <p>{filteredCountry.capital}</p>
      <p>{filteredCountry.population}</p>
      <h3>languages</h3>
      <ul>
        <li>{filteredCountry.languages}</li>
      </ul>
    </div>
  )
}

export default Country