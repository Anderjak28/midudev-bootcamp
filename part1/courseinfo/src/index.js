import React from 'react'
import ReactDOM from 'react-dom'

/*const Title = ({course}) =>  <h1>{course}</h1>*/ 

const Title = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <p>
    {props.part} {props.excercise}
    </p>
  )
}

const Final = (props) => {
  const a = props.exercises1
  const b = props.exercises2
  const c = props.exercises3
  return(
   <p>Number of exercises {a + b + c}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course = {course}/>
      <Content part = {part1} excercise = {exercises1}/>
      <Content part = {part2} excercise = {exercises2}/>
      <Content part = {part3} excercise = {exercises3}/>
      <Final exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))