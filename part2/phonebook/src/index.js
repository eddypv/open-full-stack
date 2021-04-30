import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
import Persons from './Persons.js'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ textFilter, setTextFilter ] = useState('')

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangePhone = (event) => {
    setNewPhone(event.target.value)
  }

  const handleChangeFilter = (event) => {
    setTextFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(newName.trim() === "" ){
      alert("The name is required")
      return 
    }

    const found = persons.find(item => item.name === newName.trim())
    if (typeof found !== "undefined" ){
      alert(`${newName} is already added to phonebook`)
      return 
    }
    
    const person = {name:newName.trim(), number: newPhone.trim()}
    setPersons([...persons, person])
    setNewName("")
    setNewPhone("")
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={persons} textFilter={textFilter} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
