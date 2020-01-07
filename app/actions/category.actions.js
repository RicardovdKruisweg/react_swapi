import { categoryConstants } from '../constants'
import { categoryService } from '../services'

export const categoryActions = {
  fetch
}

function fetch() {
  return dispatch => {
    dispatch(request())

    categoryService.fetch()
      .then(
        categories => dispatch(success(categories.data)),
        error => dispatch(failure(error))
      )
  }

  function request() { return { type: categoryConstants.GET_REQUEST } }
  function success(categories) { return { type: categoryConstants.GET_SUCCESS, categories } }
  function failure(error) { return { type: categoryConstants.GET_FAILURE, error } }
}