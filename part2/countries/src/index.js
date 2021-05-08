import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Filter from './Filter.js'
import Countries from './Countries.js'
import {getCountries} from './Services.js'

const App = () => {
  const [ textFilter, setTextFilter ] = useState('')
  const [ countries, setCountries] = useState([])

  const handleChangeFilter = (event) => {
    const text =event.target.value
    setTextFilter(text)
    if(text.trim() !== "")
      getCountries(text)
      .then(data => {
        console.log(data)
        setCountries(data)
      })
    else 
      setCountries([])
  }
  
  return (
    <div>
      <Filter textFilter= {textFilter} handleChangeFilter= {handleChangeFilter} />
      <Countries countries={countries}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
