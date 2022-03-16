import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState([])
  const [choosenCountry, setChoosenCountry] = useState(undefined)

  const [filteredCountries, setFilteredCountries] = useState(countries)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  },[])
  console.log('render', countries.length, 'countries')

  const filterCountries = (event) => {
    let newFilteredCountries = countries.filter(p => p.name.official.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0 )

    if(event.target.value === ''){
      setFilteredCountries([])
    } else if(newFilteredCountries.length === 1) {
      setChoosenCountry(newFilteredCountries[0])
    } else {
      setFilteredCountries(newFilteredCountries)
      setChoosenCountry(undefined)
    }
  }

  return (
    <div>
      <Filter handleChange={filterCountries}/>
      { choosenCountry ? <CountryDetails country={choosenCountry}/> : <Countries countries={filteredCountries} setChoosenCountry={setChoosenCountry}/> }
    </div>
  )
}

export default App
