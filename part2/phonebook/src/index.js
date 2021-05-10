import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
import Persons from './Persons.js'
import {getAllPersons, createPerson, deletePerson, updatePerson} from './services/Person.js' 
import {Notificacion} from './Notification.js'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ textFilter, setTextFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  useEffect(()=>{
    getAllPersons()
    .then(data => {
      setPersons(data)
    })
  }, [])

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangePhone = (event) => {
    setNewPhone(event.target.value)
  }

  const handleChangeFilter = (event) => {
    setTextFilter(event.target.value)
    setNotification(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(newName.trim() === "" ){
      alert("The name is required")
      return 
    }

    const found = persons.find(item => item.name === newName.trim())
    const person = {name:newName.trim(), number: newPhone.trim(), id:0}
    // existe verificar si quiere actualizarlo
    if (typeof found !== "undefined" ){
      if(window.confirm(`${found.name} is already added to phonebook, replace the old number with a new one?`)){
        updatePerson(found.id, person)
        .then(updateData => {
          setPersons(persons.map(item => item.id !== found.id ? item : updateData ))
          setNotification({"type":"success", "message":`Updated ${updateData.name}`})
        })
      }
      
    }else{
      // crear una nuevo
      
      createPerson(person)
        .then(createData => {
          setPersons([...persons, createData])
          setNotification({"type":"success", "message":`Added ${createData.name}`})
          setNewName("")
          setNewPhone("")
        })
    }
    
  }
  const handleDelete = (id,name, event) =>{
    if (window.confirm(`delete ${name}?`)){
      
      deletePerson(id)
        .then(data => { 
          
          const updatePersons = persons.filter((item) => item.id !== id)
          setPersons(updatePersons)
          setNotification({"type":"success", "message":`Deleted ${name}`})
        })
        .catch(error =>{
          
          setNotification({"type":"error", "message":`The information ${name} has already been removed from server`})
        })
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notificacion notification={notification}/>
      <Filter textFilter= {textFilter} handleChangeFilter= {handleChangeFilter} />
      <h2>add a new</h2>
      <PersonForm 
        name={newName} 
        phone={newPhone} 
        handleChangeName={handleChangeName} 
        handleChangePhone={handleChangePhone}  
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} textFilter={textFilter} handleDelete={handleDelete} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
