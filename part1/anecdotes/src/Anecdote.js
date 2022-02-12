const Anecdote = ({title, anecdote, points}) => {
  return (
    <>
      <h2>{title}</h2>
      <div>
        {anecdote}
      </div>
      <div>has {points} votes</div>
    </>
  )
}

export default Anecdote
