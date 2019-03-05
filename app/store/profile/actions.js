import * as types from './actionTypes'
import firebaseService from '../../services/firebase'

const FIREBASE_REF_PROFILE = firebaseService.database().ref('Profiles')
const FIREBASE_REF_MESSAGES_LIMIT = 1
export const updateProfileMessage = (urlPath,displayName,sex,staffCode,
  birthDate,status,statusAccount) => {
  return (dispatch) => {
    dispatch(profileMessageLoading())
    
    // Uri file = Uri.fromFile(new File("path/to/images/rivers.jpg"));
    // StorageReference riversRef = storageRef.child("images/"+file.getLastPathSegment());
    // uploadTask = riversRef.putFile(file);

    let currentUser = firebaseService.auth().currentUser
    let createdAt = new Date().getTime()
    let profileMessage = {
      UserID: currentUser.uid,
      Image_Avatar:urlPath,
      DisPlayName:displayName,
      Sex:sex,
      StaffCode:staffCode,
      BirthDate:birthDate,
      Status:status,
      StatusAccount:statusAccount,
      UpdatedAt: createdAt,     
    }

    FIREBASE_REF_PROFILE.push().set(profileMessage, (error) => {
      if (error) {
        dispatch(profileMessageError(error.message))
      } else {
        dispatch(profileMessageSuccess())
      }
    })
  }
}

export const updateMessage = text => {
  return (dispatch) => {
    dispatch(profileUpdateMessage(text))
  }
}

export const loadMessages = () => {
  return (dispatch) => {
    FIREBASE_REF_PROFILE.limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snapshot) => {
      dispatch(loadMessagesSuccess(snapshot.val()))
    }, (errorObject) => {
      dispatch(loadMessagesError(errorObject.message))
    })
  }
}

const profileMessageLoading = () => ({
  type: types.PROFILE_MESSAGE_LOADING
})

const profileMessageSuccess = () => ({
  type: types.PROFILE_MESSAGE_SUCCESS
})

const profileMessageError = error => ({
  type: types.PROFILE_MESSAGE_ERROR,
  error
})

const profileUpdateMessage = profile => ({
  type: types.PROFILE_MESSAGE_UPDATE,
  profile
})

