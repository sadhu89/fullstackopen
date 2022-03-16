import _ from 'lodash'
import Weather from './Weather'

const CountryDetails = ({country}) => (
  <>
    <h1>{country.name.official}</h1>
    <div>capital {country.capital.join(', ')}</div>
    <div>area {country.area}</div>
    <h3>languages:</h3>
    <ul>
      {_.values(country.languages).map((language, index) => <li key={index}>{language}</li>)}
    </ul>
    <img src={country.flags['png']}/>

    <Weather city={country.capital[0]}/>
  </>
)

export default CountryDetails
