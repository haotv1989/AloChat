import * as types from './actionTypes'
import firebaseService from '../../services/firebase'

const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Rooms')
const FIREBASE_REF_MESSAGES_LIMIT = 10
//var data =[{title:"BOD", image:'person' },{title:"MIS", image:'person' },{title:"Credit Dept", image:'person' }, {title:"Marketing Dept", image: 'person'}, {title:"Customer Service", image: 'person'}];
export const createRoom = message => {
  return (dispatch) => {
    dispatch(roomMessageLoading())

    let currentUser = firebaseService.auth().currentUser
    let createdAt = new Date().getTime()
    let roomMessage = {
      RoomName: message,
      createdAt: createdAt,
      user: {
        id: currentUser.uid,
        email: currentUser.email
      }
    }

    FIREBASE_REF_MESSAGES.push().set(roomMessage, (error) => {
      if (error) {
        dispatch(roomMessageError(error.message))
      } else {
        dispatch(roomMessageSuccess())
      }
    })
  }
}
export const searchRoom = text => {    
  const newData = this.state.dataSource.filter(item => {      
    const itemData = `${item.title.toUpperCase()}`;
     const textData = text.toUpperCase();        
     return itemData.indexOf(textData) > -1;    
  });    
  this.setState({ dataSource: newData });  
};
export const updateRoom = text => {
  return (dispatch) => {
    dispatch(roomUpdateMessage(text))
  }
}

export const loadRoom = () => {
  return (dispatch) => {
    FIREBASE_REF_MESSAGES.limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snapshot) => {
      dispatch(loadMessagesSuccess(snapshot.val()))
    }, (errorObject) => {
      dispatch(loadMessagesError(errorObject.message))
    })
  }
}

const roomMessageLoading = () => ({
  type: types.ROOM_MESSAGE_LOADING
})

const roomMessageSuccess = () => ({
  type: types.ROOM_MESSAGE_SUCCESS
})

const roomMessageError = error => ({
  type: types.ROOM_MESSAGE_ERROR,
  error
})

const roomUpdateMessage = text => ({
  type: types.ROOM_MESSAGE_UPDATE,
  text
})

const loadMessagesSuccess = messages => ({
  type: types.ROOM_LOAD_MESSAGES_SUCCESS,
  messages
})

const loadMessagesError = error => ({
  type: types.ROOM_LOAD_MESSAGES_ERROR,
  error
})
