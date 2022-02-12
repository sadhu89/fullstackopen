const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const noFeedback = (
      <p>
        No feedback given
      </p>
    )

  const body = (
      <>
        <div>good {good} </div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {total}</div>
        <div>average {total/3}</div>
        <div>positive {(good/total)*100} %</div>
      </>
  )


  return (
    <>
      <h2>statistics</h2>
      { total === 0 ? noFeedback : body }
    </>
  )
}

export default Statistics
