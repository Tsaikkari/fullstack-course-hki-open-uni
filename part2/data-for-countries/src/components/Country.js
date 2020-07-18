import React from 'react';
// TODO: show flag
const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map((language, i) => 
        <li key={i}>{language.name}</li>
        )}
      </ul>
      <img src={country.flag} />
    </div>
  )
}

export default Country