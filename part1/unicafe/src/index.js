import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = (props) => (
  <div>
    {props.text} 
    {props.feedback}
  </div>
)
    
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1)
  }

  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleSetBad = () => {
    setBad(bad + 1)
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
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


