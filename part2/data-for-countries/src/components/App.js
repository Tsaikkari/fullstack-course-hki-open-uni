import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchBox from './SearchBox';
import FilteredCountries from './FilteredCountries';

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  const hook = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }

  useEffect(hook, [])

  const handleSetSearchCountry = (event) => {
    let filteredCountries = countries.filter(country => {
      return country.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setSearchCountry(event.target.value)
    if (event.target.value === '') {
      setFilteredCountries([])
    } else {
      setFilteredCountries(filteredCountries)
    }
  }
    
  return (
    <div>
      <SearchBox 
        searchCountry={searchCountry}
        handleSetSearchCountry={handleSetSearchCountry}
      />
      
      {(filteredCountries.length > 1 && filteredCountries.length <= 10) && 
      <FilteredCountries filteredCountries={filteredCountries} />}
      {filteredCountries.length > 10 && <p>Too many matches, specify another filter</p>}
    </div>
  );
}

export default App;
