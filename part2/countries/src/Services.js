import axios from 'axios'

export const getCountries = (textSearch) =>{
    return axios.get(`https://restcountries.eu/rest/v2/name/${textSearch}?fields=name;capital;population;flag;languages`)
        .then(response => {
            return response.data
        })
        
}

export const getTemperature = (apiKey, capital) =>{
    
    return axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`)
        .then(response => {
            const value = {
                "capital": response.data.location.name,
                "temperature": response.data.current.temperature,
                "wind_speed" : response.data.current.wind_speed,
                "wind_direction" : response.data.current.wind_dir,
                "flag": response.data.current.weather_icons[0]
            }
            return value
        })
}
