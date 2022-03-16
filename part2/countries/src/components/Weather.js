import {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({city}) => {
  const [apiResponse, setApiResponse] = useState(undefined)

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(reponse => {
        setApiResponse(reponse.data)
        console.log(reponse)
      })
  }, [])

  if(!apiResponse){
    return false
  }

  return (<>
            <h2>Weather {city}</h2>
            <div>temperature {apiResponse.main.temp} Celsius</div>
            <img src={`http://openweathermap.org/img/wn/${apiResponse.weather[0].icon}@2x.png`}/>
            <div>wind {apiResponse.wind.speed}</div>
          </>)
}

export default Weather
