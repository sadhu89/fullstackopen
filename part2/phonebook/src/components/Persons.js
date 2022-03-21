import Person from './Person'

const Persons = ({persons, handleDeletePerson}) => (
  <>
    {persons.map(person => <Person key={person.id} person={person} handleDeletePerson={handleDeletePerson}/>)}
  </>
)

export default Persons
