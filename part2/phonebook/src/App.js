import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filteredPersons, setFilteredPersons] = useState(persons)

  const [newPerson, setNewPerson] = useState({name: '', number: ''})

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.map(p => p.name).indexOf(newPerson.name) >= 0) {
      return alert(`${newPerson.name} is already added to phonebook`)
    }
    setPersons(persons.concat({name: newPerson.name, number: newPerson.number}))
    setNewPerson({name: '', number: ''})
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
