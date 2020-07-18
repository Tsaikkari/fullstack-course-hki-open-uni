import React from 'react';

const Countries = (props) => {
  return (
    <div>
      {props.filteredCountries.map((country, i) => 
        <p key={i}>{country.name}</p>
      )}
    </div>
  )
}

export default Countries

