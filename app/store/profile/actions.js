import * as types from './actionTypes'
import firebaseService from '../../services/firebase'
import RNFetchBlob from 'react-native-fetch-blob'

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

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
      DisplayName:displayName,
      Sex:sex,
      StaffCode:staffCode,
      BirthDate:birthDate,
      Status:status,
      StatusAccount:statusAccount,
      UpdatedAt: createdAt,     
    }

    FIREBASE_REF_PROFILE.child(currentUser.uid).push().set(profileMessage, (error) => {
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
export const uploadImage=(uri, mime = 'application/octet-stream')=> {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    let uploadBlob = null

    const imageRef = firebaseService.storage().ref('avatar')

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        reject(error)
    })
  })
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

