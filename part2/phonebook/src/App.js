import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setFilteredPersons(response.data)
      })
  },[])
  console.log('render', persons.length, 'persons')

  const [filteredPersons, setFilteredPersons] = useState([])

  const [newPerson, setNewPerson] = useState({name: '', number: ''})

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.map(p => p.name).indexOf(newPerson.name) >= 0) {
      return alert(`${newPerson.name} is already added to phonebook`)
    }
    axios
    .post('http://localhost:3001/persons', newPerson)
      .then(response => {
      let newPersons = persons.concat({id: response.data.id, name: newPerson.name, number: newPerson.number})
      setPersons(newPersons)
      setFilteredPersons(newPersons)
      setNewPerson({name: '', number: ''})
    })
  }

  const handleInputChange = (personFieldName) => {
    return (event) => setNewPerson({...newPerson, [personFieldName]: event.target.value})
  }

  const filterPersons = (event) => {
    setFilteredPersons(persons.filter(p => p.name.toLowerCase().indexOf(event.target.value) >= 0))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={filterPersons}/>
      <h2>Add a new</h2>
      <PersonForm handleClick={addPerson} handleInputChange={handleInputChange} newPerson={newPerson}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App
