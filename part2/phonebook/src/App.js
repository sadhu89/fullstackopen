import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(person => {
        setPersons(person)
        setFilteredPersons(person)
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
    personService
      .create(newPerson)
      .then(response => {
      let newPersons = persons.concat({id: response.id, name: newPerson.name, number: newPerson.number})
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

  const handleDeletePerson = (id) => {
    if(window.confirm("Are you sure?")){
      personService
        .remove(id)
        .then(_ => {
          let newPersons = persons.filter(person => person.id !== id)
          setPersons(newPersons)
          setFilteredPersons(newPersons)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={filterPersons}/>
      <h2>Add a new</h2>
      <PersonForm handleClick={addPerson} handleInputChange={handleInputChange} newPerson={newPerson}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDeletePerson={handleDeletePerson}/>
    </div>
  )
}

export default App
