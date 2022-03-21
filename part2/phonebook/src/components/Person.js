const Person = ({person, handleDeletePerson}) => (
  <>
    <div>{person.name} {person.number} <button onClick={() => handleDeletePerson(person.id)}>Delete</button></div>
  </>
)

export default Person
