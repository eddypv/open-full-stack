import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({title, anecdote, votes})=>{
  return (
    <div>
        <h1>{title}</h1>
        <p>{anecdote}</p>
        <p>has {votes} votes</p>
    </div>

  )
}

const AnecdoteDay = ({title, anecdote, votes, handleVote, handleRandom })=>{
  return (
    <div>
      <Anecdote title={title} anecdote={anecdote} votes={votes}/>
      <div>
        <button onClick={handleVote} >vote</button>
        <button onClick={handleRandom} >next anecdote</button>
      </div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const initialPoints = new Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(initialPoints)

  const handleRandom = () =>{
    const min = 0
    const max = anecdotes.length -1
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    setSelected(random)
  }
  const handleVote = () =>{
    const copyPoints = [...points]
    copyPoints[selected] +=1; 
    setPoints(copyPoints)
  }

  const getMostVotes= ()=>{
    const valueMax = Math.max(...points)
    if(valueMax > 0)
      return points.indexOf(valueMax)
    else
      return 0
  }
  const indexMostVotes = getMostVotes()
  const pointsMostVotes = points[indexMostVotes]
  
  if(pointsMostVotes > 0)
    return (
      <div>
        <AnecdoteDay 
          title= "Anecdote of the day" 
          anecdote={anecdotes[selected]} 
          votes={points[selected]}
          handleVote= {handleVote} 
          handleRandom= {handleRandom} 
        />
        
        <Anecdote 
          title= "Anecdote with most votes" 
          anecdote={anecdotes[indexMostVotes]} 
          votes={pointsMostVotes}
        />
      </div>
    )
  else
    return (
      <div>
        <AnecdoteDay 
          title= "Anecdote of the day" 
          anecdote={anecdotes[selected]} 
          votes={points[selected]}
          handleVote= {handleVote} 
          handleRandom= {handleRandom} 
        />
      </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))
