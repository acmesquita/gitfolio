// Import axios
const axios = require('axios')

const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    'Content-Type': 'application/json'
  }
});

const github = axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    'Content-Type': 'application/json'
  }
})

// Conexão com a API
export const search = (term)=>{
  return api.get(`/search?q=${term}`);
}

export const createPortfolio = (body) => {
  return api.post('/portfolio', body.portfolio)
}

export const showPortfolio = (id) => {
  return api.get(`/show/${id}`);
}

// Conexão com o GitHub
export const getUser = (username) => {
  return github.get(`/${username}`);
}

export const getUserRepository = (username) => {
  return github.get(`/${username}/repos`);
}