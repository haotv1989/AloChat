import { combineReducers } from 'redux'

import session from './session'
import chat from './chat'
import room from './room'
import profile from './profile'


export default combineReducers({
  session,
  chat,
  room,
  profile
})
