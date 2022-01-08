import React from 'react'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Content = (props) => (
  <>
    <Part name={props.part1.name} exercises={props.part1.exercises}/>
    <Part name={props.part2.name} exercises={props.part2.exercises}/>
    <Part name={props.part3.name} exercises={props.part3.exercises}/>
  </>
)

const Total = (props) => (
  <p>Number of exercises {props.sum}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]}/>
      <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App
