import * as types from './actionTypes'

const initialState = {
  sending: false,
  sendingError: null,
  message: '',
  messages: {},
  loadMessagesError: null
}

const ROOM = (state = initialState, action) => {
  switch(action.type) {
    case types.ROOM_MESSAGE_LOADING:
      return { ...state, sending: true, sendingError: null }
    case types.ROOM_MESSAGE_ERROR:
      return { ...state, sending: false, sendingError: action.error }
    case types.ROOM_MESSAGE_SUCCESS:
      return { ...state, sending: false, sendingError: null, message: '' }
    case types.ROOM_MESSAGE_UPDATE:
      return { ...state, sending: false, message: action.text, sendingError: null }
    case types.ROOM_LOAD_MESSAGES_SUCCESS:
      return { ...state, messages: action.messages, loadMessagesError: null }
    case types.ROOM_LOAD_MESSAGES_ERROR:
      return { ...state, messages: null, loadMessagesError: action.error }
    default:
      return state
  }
}

export default ROOM
