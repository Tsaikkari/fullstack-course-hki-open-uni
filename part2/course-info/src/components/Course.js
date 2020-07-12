import React from 'react';

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => (
        <Part 
          key={part.id}
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
      <p><strong>Total of {numberOfExercises} exercises</strong></p>
    </div>
  )
}

export default Course