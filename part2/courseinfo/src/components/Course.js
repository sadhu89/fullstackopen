import React from 'react'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Content = ({parts}) => (
  <>
    { parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises}/>
    )}
  </>
)

const Total = ({parts}) => {
  const total=parts.reduce((acc, part) => acc + part.exercises, 0)
  return <strong> total of {total} exercises</strong>
}

const Course = ({course: {name, parts}}) => (
  <div>
    <Header course={name}/>
    <Content parts={parts}/>
    <Total parts={parts}/>
  </div>
)

export default Course
