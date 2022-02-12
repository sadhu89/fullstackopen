const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  return (
    <>
      <h2>statistics</h2>
      <div>good {good} </div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {total/3}</div>
      <div>positive {(good/total)*100} %</div>
    </>
  )
}

export default Statistics
