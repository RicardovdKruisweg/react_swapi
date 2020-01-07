import { categoryConstants } from '../constants'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export function categories(state = initialState, action) {
  switch (action.type) {
  case categoryConstants.GET_REQUEST:
    return {
      ...state,
      loading: true
    }
  case categoryConstants.GET_SUCCESS:
    return {
      ...state,
      loading: false,
      items: action.categories
    }
  case categoryConstants.GET_FAILURE:
    return {
      ...state,
      error: action.error
    }
  default:
    return state
  }
}