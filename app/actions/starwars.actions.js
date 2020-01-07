import { starwarsConstants } from '../constants'
import { starwarsService } from '../services'

export const starwarsActions = {
  fetch,
  fetchItem,
  fetchByCategory
}

function fetch() {
  return dispatch => {
    dispatch(request(starwarsConstants.GET_REQUEST))

    starwarsService.fetchAll()
      .then(
        starwarsinfo => dispatch(success(starwarsConstants.GET_SUCCESS, starwarsinfo)),
        error => dispatch(failure(starwarsConstants.GET_FAILURE, error))
      )
  }
}

function fetchItem(url) {
  return dispatch => {
    dispatch(request(starwarsConstants.GET_ITEM_REQUEST))

    starwarsService.fetchItem(url)
      .then(
        starwarsitem => dispatch(success(starwarsConstants.GET_ITEM_SUCCESS, starwarsitem.data)),
        error => dispatch(failure(starwarsConstants.GET_ITEM_FAILURE, error))
      )
  }
}

function fetchByCategory(category) {
  return dispatch => {
    dispatch(request(starwarsConstants.GET_CATEGORY_REQUEST))

    starwarsService.fetchByCategory(category)
      .then(
        starwarsinfo => dispatch(success(starwarsConstants.GET_CATEGORY_SUCCESS, starwarsinfo)),
        error => dispatch(failure(starwarsConstants.GET_CATEGORY_FAILURE, error))
      )
  }
}

function request(type) { return { type: type } }
function success(type, result) { return { type: type, result } }
function failure(type, error) { return { type: type, error } }