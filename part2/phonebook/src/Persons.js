const Persons = ({persons, textFilter})=>{
    return (
        <div>
            {
            persons
            .filter(person =>{
                if(textFilter === "" )
                    return true
                else 
                    return person.name.includes(textFilter)
            })
            .map(person => <p key={person.id} >{person.name} {person.number}</p>)
            }
      </div>
    )
}

export default Persons