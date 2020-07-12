import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Positive = (props) => {
  let positive = props.good / props.all * 100
  return (
    <div> 
      {props.text}: {positive + '%'} 
    </div>
  )
}

const Average = (props) => {
  let average = (props.good - props.bad) / props.all
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
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average)
    setPositive(positive)
  }

  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage(average)
    setPositive(positive)
  }

  const handleSetBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average)
    setPositive(positive)
  }

  return (
  <div>
    <table cellSpacing="20">
      <thead>
        <tr>
          <th>Give feedback</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Button onClick={handleSetGood} text="Good"/>
            <Button onClick={handleSetNeutral} text="Neutral"/>
            <Button onClick={handleSetBad} text="Bad"/>
          </td>
        </tr>
        <tr>
          <th>Statistics</th>
        </tr>
        <tr>
          <td><Statistics good={good} neutral={neutral} bad={bad} all={all} /></td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


