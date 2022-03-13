import { useState } from 'react'

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

  const filterPersons = (event) => {
    setFilteredPersons(persons.filter(p => p.name.toLowerCase().indexOf(event.target.value) >= 0))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input onChange={filterPersons}/>
      <h2>Add a new</h2>
      <form>
        <div>
          <div>name: <input value={newPerson.name} onChange={(event) => setNewPerson({...newPerson, name: event.target.value})}/></div>
          <div>number: <input value={newPerson.number} onChange={(event) => setNewPerson({...newPerson, number: event.target.value})}/></div>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person, index) => <div key={index}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App
