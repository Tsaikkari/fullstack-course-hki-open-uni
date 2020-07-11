import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const arrLength = 5
const points = Array(arrLength).fill(0)
const copy = [...points]

const App = (props) => {
  const [selected, setSelected] = useState('') 
  const [votes, setPoints] = useState()
  const [hurts, manpower, time, understand, evil, debugging] = anecdotes
  
  const handleSelect = () => {
    const randomNumber = Math.floor(Math.random() * props.anecdotes.length)
    let selected = props.anecdotes[randomNumber]
    setSelected(selected)
    // TODO: shows previous votes of each anecdote
    setPoints(0)
  }

  //TODO: fix last anecdote's vote type
  const handleVote = () => {
    if (selected === hurts) {
      setPoints(copy[0] += 1)
    } else if (selected === manpower) {
      setPoints(copy[1] += 1)
    } else if (selected === time) {
      setPoints(copy[2] += 1)
    } else if (selected === understand) {
      setPoints(copy[3] += 1)
    } else if (selected === evil) {
      setPoints(copy[4] += 1)
    } else if (selected === debugging) {
      setPoints(copy[5] += 1)
    } 
  }

  return (
    <div>
      <p>{selected}</p>
      <p>{votes}</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleSelect}>next anecdote</button>
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

