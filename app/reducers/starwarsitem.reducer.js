import { starwarsConstants } from '../constants'

const initialState = {
  item: [],
  loading: false,
  error: null
}

export function starwarsitem(state = initialState, action) {
  switch (action.type) {
  case starwarsConstants.GET_ITEM_REQUEST:
    return {
      ...state,
      loading: true
    }
  case starwarsConstants.GET_ITEM_SUCCESS:
    return {
      ...state,
      loading: false,
      item: action.result
    }
  case starwarsConstants.GET_ITEM_FAILURE:
    return {
      ...state,
      error: action.error
    }
  default:
    return state
  }
}