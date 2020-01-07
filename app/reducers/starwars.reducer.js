import { starwarsConstants } from '../constants'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export function starwarsinfo(state = initialState, action) {
  switch (action.type) {
  case starwarsConstants.GET_REQUEST:
    return {
      ...state,
      loading: true
    }
  case starwarsConstants.GET_SUCCESS:
    return {
      ...state,
      loading: false,
      items: action.result
    }
  case starwarsConstants.GET_FAILURE:
    return {
      ...state,
      error: action.error
    }
  case starwarsConstants.GET_CATEGORY_REQUEST:
    return {
      ...state,
      loading: true
    }
  case starwarsConstants.GET_CATEGORY_SUCCESS:
    return {
      ...state,
      loading: false,
      items: action.result
    }
  case starwarsConstants.GET_CATEGORY_FAILURE:
    return {
      ...state,
      error: action.error
    }
  default:
    return state
  }
}