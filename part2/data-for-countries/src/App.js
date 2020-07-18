import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchBox from './components/SearchBox';
import Countries from './components/Countries';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  const hook = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data) 
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(hook, [])

  const handleCountrySearch = (event) => {
    let filteredCountries = countries.filter(country => {
      return country.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    let maxNineCountries = filteredCountries.slice(1,10)
    let oneCountry = filteredCountries.slice(0,1)

    setSearchCountry(event.target.value)
    if (event.target.value === '') {
      setFilteredCountries([])
    } else {
      setFilteredCountries(maxNineCountries)
    }
    if (filteredCountries.length < 2) {
      setFilteredCountries(oneCountry)
    }
  }
    
  return (
    <div>
      <SearchBox 
        searchCountry={searchCountry}
        handleCountrySearch={handleCountrySearch}
      />
      <Countries 
        filteredCountries={filteredCountries}
      />
      {filteredCountries.length === 1 && filteredCountries.map((country) => 
        <Country key={country.flag} country={country} />
      )}
    </div>
  );
}

export default App;
