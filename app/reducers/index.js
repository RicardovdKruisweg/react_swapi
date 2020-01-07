import { combineReducers } from 'redux'
import { categories } from './category.reducer'
import { starwarsinfo } from './starwars.reducer'
import { starwarsitem } from './starwarsitem.reducer'

export default combineReducers({
  categories,
  starwarsinfo,
  starwarsitem
})