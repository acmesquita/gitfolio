// Import axios
const axios = require("axios");

const api = axios.create({
  baseURL: "https://gitfolioapi.herokuapp.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const github = axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    "Content-Type": "application/json",
  },
});

// Conexão com a API
export const search = (term) => {
  return api.get(`/search?q=${term}`);
};

export const createPortfolio = (body) => {
  return api.post("/portfolio", body.portfolio);
};

export const showPortfolio = (id) => {
  return api.get(`/show/${id}`);
};

// Conexão com o GitHub
export const getUser = (username) => {
  return github.get(`/${username}`);
};

export const getUserRepository = (username, public_repos) => {
  const pages = public_repos > 100 ? parseInt(public_repos / 100) + 1 : 1;
  const list = [];
  for (let page = 1; page <= pages; page++) {
    let p = github.get(`/${username}/repos?per_page=100&page=${page}`);
    list.push(p);
  }
  return Promise.all(list);
};
