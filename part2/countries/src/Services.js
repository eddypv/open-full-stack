import axios from 'axios'

export const getCountries = (textSearch) =>{
    return axios.get(`https://restcountries.eu/rest/v2/name/${textSearch}?fields=name;capital;population;flag;languages`)
        .then(response => {
            return response.data
        })
}

