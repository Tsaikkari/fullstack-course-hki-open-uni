import React from 'react';
// TODO: show flag
const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <div>
    {country.languages.map((language, i) => 
      <p key={i}>{language.name}</p>
    )}
    </div>
      <a href={country.flag}></a>
    </div>
  )
}

export default Country