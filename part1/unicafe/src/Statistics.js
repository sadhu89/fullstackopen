import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const noFeedback = (
      <p>
        No feedback given
      </p>
    )

  const body = (
      <>
        <StatisticLine label="good" value={good} />
        <StatisticLine label="neutral" value={neutral} />
        <StatisticLine label="bad" value={bad} />
        <StatisticLine label="all" value={total} />
        <StatisticLine label="average" value={total/3} />
        <StatisticLine label="positive" value={(good/total)*100 + " %"}/>
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
