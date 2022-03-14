import _ from 'lodash'

const CountryDetails = ({country}) => (
  <>
    <h2>{country.name.official}</h2>
    <div>capital {country.capital.join(', ')}</div>
    <div>area {country.area}</div>
    <h3>languages:</h3>
    <ul>
      {_.values(country.languages).map(language => <li>{language}</li>)}
    </ul>
    <img src={country.flags['png']}/>
  </>
)

export default CountryDetails
