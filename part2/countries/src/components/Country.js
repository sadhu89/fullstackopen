const Country = ({country, setChoosenCountry}) => (
  <>
    <div>{country.name.official} <button onClick={() => setChoosenCountry(country)}>Show</button></div>
  </>
)

export default Country
