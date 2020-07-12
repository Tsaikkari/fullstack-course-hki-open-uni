import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (
        <Part 
          key={part.name}
          name={part.name} 
          exercises={part.exercises}
        />
      ))}
    </div>
  )
}

const Total = (props) => {
  const exercises = props.course.parts.map(part => part.exercises)
  const numberOfExercises = exercises.reduce((acc, num) => {
    return acc + num
  })
  
  return (
    <div>
      <p>Number of exercises {numberOfExercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name:  "Half Stack application development",
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

