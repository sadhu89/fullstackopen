import Country from './Country'

const Countries = ({countries}) => (
  <>
    {countries.map((country, index) => <Country key={index} country={country}/>)}
  </>
)

export default Countries
