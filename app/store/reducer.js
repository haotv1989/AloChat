import { combineReducers } from 'redux'

import session from './session'
import chat from './chat'
import room from './room'

export default combineReducers({
  session,
  chat,
  room
})
