import Country from './Country'

const Countries = ({countries, setChoosenCountry}) => (
  <>
    {
      countries.length > 10 ?
        <div>Too many matches, specify another filter</div> :
        countries.map((country, index) => <Country key={index} country={country} setChoosenCountry={setChoosenCountry}/>)
    }
  </>
)

export default Countries
