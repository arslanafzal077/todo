import { combineReducers } from 'redux'
import app from './app'
import root from './root'
//insert another reducers here to be combined

const reducers = combineReducers({
  app,
  root
})

export default reducers
