import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '666' }
  ])
  const [newPerson, setNewPerson] = useState({name: '', number: ''})

  const addName = (event) => {
    event.preventDefault()
    if(persons.map(p => p.name).indexOf(newPerson.name) >= 0) {
      return alert(`${newPerson.name} is already added to phonebook`)
    }
    setPersons(persons.concat({name: newPerson.name, number: newPerson.number}))
    setNewPerson({name: '', number: ''})
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <div>name: <input value={newPerson.name} onChange={(event) => setNewPerson({...newPerson, name: event.target.value})}/></div>
          <div>number: <input value={newPerson.number} onChange={(event) => setNewPerson({...newPerson, number: event.target.value})}/></div>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => <div key={index}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App
