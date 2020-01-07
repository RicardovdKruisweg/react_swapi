//import request from '../helpers/request'
import axios from 'axios'
import { apiConstants } from '../constants'

export const categoryService = {
  fetch
}

const client = axios.create({
  baseURL: apiConstants.URL
})

function fetch() {
  return client({
    method: 'get',
    url: '/',
  })
}