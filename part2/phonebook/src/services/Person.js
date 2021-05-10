import axios from 'axios'
const URL = "http://localhost:3001/persons"

export const getAllPersons = () =>{
    return axios.get(URL)
        .then(response => response.data)
}

export const createPerson = (person) =>{
    return axios.post(URL, person )
        .then (response => response.data)
}

export const deletePerson = (id) =>{
    const request = axios.delete(`${URL}/${id}`)
    return request
        
}

export const updatePerson = (id, person) =>{
    return axios.put(`${URL}/${id}`, person)
        .then (response => response.data)
}


