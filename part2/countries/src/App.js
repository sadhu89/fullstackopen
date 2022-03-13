import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

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
    setFilteredCountries(countries.filter(p => p.name.official.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0))
  }

  return (
    <div>
      <Filter handleChange={filterCountries}/>
      <Countries countries={filteredCountries}/>
    </div>
  )
}

export default App
