const Person = ({id,name, number, handleDelete}) =>{
    return(<div>
        <p>{name} {number} <button onClick={(e)=>{ handleDelete(id,name, e)}}>Delete</button></p>
    </div>)
}
const Persons = ({persons, textFilter, handleDelete})=>{
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
            .map(person => <Person 
                                key={person.id} 
                                id= {person.id}
                                name={person.name} 
                                number={person.number} 
                                handleDelete= {handleDelete}/>)
            }
      </div>
    )
}

export default Persons