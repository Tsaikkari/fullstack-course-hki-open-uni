import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//TODO: change
const Positive = (props) => {
  let positive = props.good / props.all * 100
  if (!positive) {
    return "Positive: 0%"
  }
  return (
    <div> 
      {props.text}: {positive + '%'} 
    </div>
  )
}

const Average = (props) => {
  console.log(props)
  let average = (props.good - props.bad) / props.all
  if (!average) {
    return "Average: 0"
  }
  return (
    <div>
      {props.text}: {average}
    </div>
  )
}

const All = (props) => {
  return (
    <div>
      {props.text}: {props.all}
    </div>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <Statistic text="Good" feedback={props.good} />
      <Statistic text="Neutral" feedback={props.neutral} />
      <Statistic text="Bad" feedback={props.bad} />
      <All text="All" all={props.all} />
      <Average text="Average" good={props.good} bad={props.bad} all={props.all} />
      <Positive text="Positive" good={props.good} all={props.all}/>
    </div>
  )
}

const Statistic = (props) => (
  <div>
    {props.text}: {props.feedback}
  </div>
)
    
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleSetBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
  <div>
    <h1>Give feedback</h1>
    <Button onClick={handleSetGood} text="Good"/>
    <Button onClick={handleSetNeutral} text="Neutral"/>
    <Button onClick={handleSetBad} text="Bad"/>
    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} all={all} />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


