const ItemCountry = ({ name, handleClick }) =>{
    return <div>
        <p>{name} <button onClick= {(event)=> handleClick(name, event)} >Show</button></p>
    </div>
}
const Countries = ({countries, handleClick})=>{
    if(countries.length === 0 )
        return <div></div>

    if(countries.length > 10)
        return <div>Too many matches, specify another filter</div>
    else
        return (
            <div>
                {countries.map( item => <ItemCountry key={item.name} name={item.name} handleClick={handleClick} />)}
            </div>
        )
}
export default Countries