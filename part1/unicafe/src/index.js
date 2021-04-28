import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Statistics from './Statistics.js'
import Button from './Button.js'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>{
    setGood(good+1)
  }
  
  const handleNeutral = () =>{
    setNeutral(neutral+1)
  }

  const handleBad = () =>{
    setBad(bad+1)
  }

  const getAll= () =>{
    return good+neutral+bad
  }
  const getAverage = () => {
    const total = getAll()
    let value = 0
    if(total > 0)
      return (good/total) - (bad/total)
    return value
  }

  const getPositive = ()=>{
    let value = 0
    const total = getAll()

    if(total > 0){
      value = (good/total)*100 
    }
    
    return value.toString() + " %"
  }

  const objectStatistic = {
    "good":good,
    "neutral":neutral,
    "bad":bad, 
    "all": getAll(),
    "average":getAverage(),
    "positive":getPositive()

  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGood} text="Good"/>
        <Button handleClick={handleNeutral} text="Neutral"/>
        <Button handleClick={handleBad} text="Bad"/>
      </div>
      <Statistics statistics={objectStatistic}  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
