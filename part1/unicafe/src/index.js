import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Positive = (props) => {
  return (
    <div> 
      {props.text}: {props.positive}%
    </div>
  )
}

const Average = (props) => {
  let average = (props.goodValue - props.badValue) / props.allValue
  if (!average) {
    return "Average: 0"
  }
  return (
    <div>
      {props.text}: {average}
    </div>
  )
}

const History = (props) => {
  return (
    <div>
      {props.text}: {props.all}
    </div>
  )
}

const Display = (props) => (
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
    <Display text="Good" feedback={good} />
    <Display text="Neutral" feedback={neutral} />
    <Display text="Bad" feedback={bad} />
    <History text="All" all={all} />
    <Average text="Average" goodValue={good} badValue={bad} allValue={all} />
    <Positive text="Positive" />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


