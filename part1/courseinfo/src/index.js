import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return <h1>{props.name}</h1>
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
)

const App = () => {
  const course = "Half Stack application development"
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
  const [part1, part2, part3] = parts

  return (
    <div>
      <Header name={course} />
      <Content parts={[part1, part2, part3]}/>
      <Total parts={[part1, part2, part3]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

