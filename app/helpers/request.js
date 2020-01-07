import axios from 'axios'
import { apiConstants } from '../constants'

const client = axios.create({
  baseURL: apiConstants.URL
})

const request = function (options) {
  return client(options)
    .then(onSuccess)
    .catch(onError)
}

const onSuccess = function (response) {
  console.debug('Request Successful!', response)
  return response.data
}

const onError = function (error) {
  console.error('Request Failed:', error.config)

  if (error.response) {
    console.error('Status:', error.response.status)
    console.error('Data:', error.response.data)
    console.error('Headers:', error.response.headers)

  } else {
    console.error('Error Message:', error.message)
  }

  return Promise.reject(error.response || error.message)
}

export default request