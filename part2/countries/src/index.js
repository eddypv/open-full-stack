import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Filter from './Filter.js'
import Countries from './Countries.js'
import {getCountries, getTemperature} from './Services.js'
import DetailCountry from './Country.js'

const App = () => {
  const [ textFilter, setTextFilter ] = useState('')
  const [ countries, setCountries] = useState([])
  const [ showDetail, setShowDetail] = useState(false)
  const [ detailCountry, setDetailCountry] = useState({})

  const setInfoCountry = (info, temperature) =>{
    const infoCountry ={
      "info": info,
      "temperature": temperature
    }
    setDetailCountry(infoCountry)
    setShowDetail(true)
    setCountries([])
  }

  const setEmptyValues = ()=>{
    setCountries([])
    setShowDetail(false)
    setDetailCountry({})
  }

  const handleChangeFilter = (event) => {
    const text =event.target.value
    setTextFilter(text)
    if(text.trim() !== ""){
      getCountries(text)
      .then(data => {
        // one country
        if(data.length === 1){
          getTemperature(process.env.REACT_APP_API_KEY,data[0].name)
          .then( temperature => { setInfoCountry(data[0], temperature) })

        }else{
          setCountries(data)
          setShowDetail(false)
          setDetailCountry({})
        }
        
      })
      .catch(error => {
        setEmptyValues()
      })
    } else {
      setEmptyValues()
    }
      
  }
  
  const handleShowDetail = (name, event) =>{
    const detail = countries.find(item => item.name= name)
    getTemperature(process.env.REACT_APP_API_KEY,detail.name)
      .then( temperature => { setInfoCountry(detail, temperature) })
  }
  
  return (
    <div>
      <Filter textFilter= {textFilter} handleChangeFilter= {handleChangeFilter} />
      {showDetail
        ? <DetailCountry infoCountry={detailCountry.info}  temperature={detailCountry.temperature}/> 
        : <Countries countries={countries} handleClick= {handleShowDetail}/>
      }  
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
