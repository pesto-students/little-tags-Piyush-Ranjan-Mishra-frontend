import { combineReducers } from 'redux'
import user from './userReducer'
import counter from './counter'

export default combineReducers({
    user,
  counter
})