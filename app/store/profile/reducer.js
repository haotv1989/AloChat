import * as types from './actionTypes'

const initialState = {
  sending: false,
  sendingError: null,
  message: '',
  messages: {},
  loadMessagesError: null
}

const profile = (state = initialState, action) => {
  switch(action.type) {
    case types.PROFILE_MESSAGE_LOADING:
      return { ...state, sending: true, sendingError: null }
    case types.PROFILE_MESSAGE_ERROR:
      return { ...state, sending: false, sendingError: action.error }
    case types.PROFILE_MESSAGE_SUCCESS:
      return { ...state, sending: false, sendingError: null, message: '' }
    case types.PROFILE_MESSAGE_UPDATE:
      return { ...state, sending: false, message: action.text, sendingError: null }   
    default:
      return state
  }
}

export default profile
