import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchBox from './components/SearchBox';
import Countries from './components/Countries';
import Country from './components/Country';
import './index.css';

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  const [showCountry, setShowCountry] = useState(false)
  const [weather, setWeather] = useState('')

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

  // TODO: fix this
  const weatherHook = (capital, alpha2Code) => {
    const api_key = process.env.REACT_APP_API_KEY
    const queryCapital = filteredCountries.find(c => c.capital === capital)
    const queryCountry = filteredCountries.find(c => c.alpha2Code.toLowerCase() === alpha2Code.toLowerCase())
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + queryCapital + "," + queryCountry + "&appid=" + api_key + "&units=" + unit 
    axios
    .get(url)
    .then(response => {
      const weather = response.data
      console.log(weather)
      console.log(queryCapital)
      const temp = weather.main.temp
      const weatherDescription = weather.weather[0].description
      const icon = weather.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      const windSpeed = weather.wind.speed
      setWeather({
        temperature: temp,
        description: weatherDescription,
        icon: icon,
        imageURL: imageURL,
        windSpeed: windSpeed
      })
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(weatherHook, [])

  const handleCountrySearch = (event) => {
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

  const showCountryDetails = (name) => {
    const detailCountry = filteredCountries.find(country => country.name === name)
    setShowCountry(!showCountry)
    setCountries(detailCountry)
    setWeather(detailCountry)
  }
    
  return (
    <div>
      <SearchBox 
        searchCountry={searchCountry}
        handleCountrySearch={handleCountrySearch}
        weather={weather}
      />
      
      {(filteredCountries.length > 1 && filteredCountries.length <= 10) && 
      <Countries 
        filteredCountries={filteredCountries}  
        showDetails={showCountryDetails}  
        detailCountry={countries}
      />}
      {filteredCountries.length > 10 && <p>Too many matches, specify another filter</p>}
      {filteredCountries.length === 1 && filteredCountries.map((country, i) => 
        <Country 
          key={i} 
          country={country}
        />
      )}
    </div>
  );
}

export default App;
