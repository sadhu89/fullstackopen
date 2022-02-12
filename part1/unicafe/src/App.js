import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const inc = (setVar, variable) => () => {
    setVar(variable + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button label="good" onClick={inc(setGood, good)} />
      <Button label="neutral" onClick={inc(setNeutral, neutral)} />
      <Button label="bad" onClick={inc(setBad, bad)} />

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
