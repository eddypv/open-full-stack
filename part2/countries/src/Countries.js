const Country = ({name, capital, flag, population, languages})=>{
    return(
        <div>
            <h2>{name}</h2>
            <p>capital {capital}</p>
            <p>population {population}</p>
            <h3>Languages</h3>
            <ul>
                {languages.map(item => <li key={item.name}>{item.name}</li>)}
            </ul>
            <img src={flag} width="300" height="150" alt={name}/>
            
        </div>
    )
}
const Countries = ({countries})=>{
    if(countries.length === 0 )
        return <div></div>
    if(countries.length === 1)
    {
        const country = countries[0]
        return <Country 
                name={country.name} 
                flag={country.flag} 
                population={country.population}
                capital={country.capital}
                languages={country.languages}
            />
    }

    if(countries.length > 10)
        return <div>Too many matches, specify another filter</div>
    else
        return (
            <div>
                {countries.map( item => <div key={item.name}>{item.name} </div> )}
            </div>
        )
}
export default Countries