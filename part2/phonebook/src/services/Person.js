import axios from 'axios'

export const getAllPersons = () =>{
    return axios.get("http://localhost:3001/persons")
    .then(response => response.data)
}

