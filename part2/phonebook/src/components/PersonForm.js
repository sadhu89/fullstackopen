const PersonForm = ({handleClick, handleInputChange, newPerson}) => (
  <>
    <form>
      <div>
        <div>name: <input value={newPerson.name} onChange={handleInputChange('name')}/></div>
        <div>number: <input value={newPerson.number} onChange={handleInputChange('number')}/></div>
      </div>
      <div>
        <button type="submit" onClick={handleClick}>add</button>
      </div>
    </form>
  </>
)

export default PersonForm
