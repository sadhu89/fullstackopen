import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const inc = (setVar, variable) => () => {
    setVar(variable + 1)
  }

  const total = good + neutral + bad

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={inc(setGood, good)} >good</button>
      <button onClick={inc(setNeutral, neutral)}>neutral</button>
      <button onClick={inc(setBad, bad)}>bad</button>

      <h2>statistics</h2>
      <div>good {good} </div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {total/3}</div>
      <div>positive {(good/total)*100} %</div>
    </div>
  )
}

export default App
