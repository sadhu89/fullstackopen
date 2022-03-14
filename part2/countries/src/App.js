import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState([])

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
    let newFilteredCountries = countries.filter(p => p.name.official.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0)
    if(event.target.value === ''){
      setFilteredCountries([])
    } else {
      setFilteredCountries(newFilteredCountries)
    }
  }

  return (
    <div>
      <Filter handleChange={filterCountries}/>
      {filteredCountries.length === 1 ? <CountryDetails country={filteredCountries[0]}/> : <Countries countries={filteredCountries}/>}
    </div>
  )
}

export default App
