// Import axios
const axios = require('axios')
const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    'Content-Type': 'application/json'
  }
})

export const search = (term)=>{
  return api.get(`/search?q=${term}`);
}