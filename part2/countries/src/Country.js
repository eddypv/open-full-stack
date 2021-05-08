const Country = ({name, capital, flag, population, languages}) => {
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

const Temperature = ({capital, temperature, flag, wind_speed, wind_direction})=>{
    return(
        <div>
            <h2>Wheather in {capital}</h2>
            <p><strong>Temperature:</strong> {temperature} Celcius</p>
            <img src={flag} alt={capital}/>
            <p><strong>Wind:</strong> {wind_speed} mph direction {wind_direction}</p>
            
        </div>
    ) 
}


const DetailCountry = ({infoCountry, temperature})=>{
    return(
        <div>
            <Country {...infoCountry}/>
            <Temperature {...temperature} />
        </div>
    )
}

export default DetailCountry