import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const arrLength = 6
const points = Array(arrLength).fill(0)
const copy = [...points]

const App = (props) => {
  const [selected, setSelected] = useState(props.anecdotes[0]) 
  const [votes, setVotes] = useState(0)
  const [mostPopular, setMostPopular] = useState('')
  const [hurts, manpower, time, understand, evil, debugging] = anecdotes
  
  const handleSelect = () => {
    const randomNumber = Math.floor(Math.random() * props.anecdotes.length)
    let selected = props.anecdotes[randomNumber]
    setSelected(selected)
    //setSelected(Math.floor(Math.random() * props.anecdotes.length))
    // TODO: shows previous votes of each anecdote not the previous one's votes
    setVotes(0)
  }

  // TODO: iterate that! (maybe in 10 years :D)
  const handleVote = () => {
    let maxVote = Math.max(...copy)
    switch (selected) {
      case hurts:
        setVotes(copy[0] += 1)
        copy[0] === maxVote && setMostPopular(hurts)
        break;
      case manpower: 
        setVotes(copy[1] += 1)
        copy[1] === maxVote && setMostPopular(manpower)
        break;
      case time:
        setVotes(copy[2] += 1)
        copy[2] === maxVote && setMostPopular(time)
        break;
      case understand:
        setVotes(copy[3] += 1)
        copy[3] === maxVote && setMostPopular(understand)
        break;
      case evil:
        setVotes(copy[4] += 1)
        copy[4] === maxVote && setMostPopular(evil)
        break;
      case debugging:
        setVotes(copy[5] += 1)
        copy[5] === maxVote && setMostPopular(debugging)
        break;
        default:
          return ''
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
        <p>{selected}</p>
        <p>{votes}</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleSelect}>next anecdote</button>
      <h1>Anectode with most votes</h1>
        <p>{mostPopular}</p>
        {mostPopular && <p>has {Math.max(...copy)} votes</p>}
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

