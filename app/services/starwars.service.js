import axios from 'axios'
import { apiConstants } from '../constants'

export const starwarsService = {
  fetchAll,
  fetchItem,
  fetchByCategory
}

function fetchAll(urls = []) {
  //TODO:: Make this dynamic 
  urls = [
    'https://swapi.co/api/people',
    'https://swapi.co/api/planets',
    'https://swapi.co/api/films',
    'https://swapi.co/api/species',
    'https://swapi.co/api/vehicles',
    'https://swapi.co/api/starships'
  ]
  return axios.all(urls.map(url => axios.get(url)))
    .then(axios.spread(function (...res) {
      const result = res.map(res => {
        return res.data.results
      })
      const flatresult = [].concat.apply([], result)
      return flatresult
    }))
}

function fetchByCategory(category) {
  return axios.get(apiConstants.URL + '/' + category)
    .then(res => { 
      return res.data.results
    })
}

function fetchItem(url) {
  console.log(url)
  return axios.get(apiConstants.URL + url)
    .then(res => {return res})
}