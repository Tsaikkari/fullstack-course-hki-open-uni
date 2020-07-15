import React from 'react';
import Country from './Country';

// TODO: fix one country match
const FilteredCountries = ({ filteredCountries }) => {
  return (
    <div>
      {filteredCountries.length === 1 ? filteredCountries.map(filteredCountry =>
        <Country key={filteredCountry.name} filteredCountry={filteredCountry} />) 
      : 
      filteredCountries.map(filteredCountry => {
       return <p key={filteredCountry.name}>{filteredCountry.name}</p>
      })}
    </div>
  )
}

export default FilteredCountries